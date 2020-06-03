class TodoList {
  constructor(form, list, keyname) {
    this.form = form;
    this.list = list;

    this.cleanButton = this.form.querySelector("button.clean");
    this.deleteAllButton = this.form.querySelector("button.delete");

    if (
      !this.form ||
      !this.list ||
      !this.cleanButton ||
      !this.deleteAllButton
    ) {
      throw new Error("hay elementos que fallan, comprueba tu HTML");
    }

    this.todos = [];
    this.keyname = keyname;

    const storedTodos = JSON.parse(window.localStorage.getItem(this.keyname));

    if (storedTodos) {
      this.todos = storedTodos;
    }
    this.render();

    //evento delegado
  }

  attachEvents() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = this.form.querySelector("input#todo");
      if (input.value.length > 0 && input.value.length < 200) {
        this.addTodo(input.value);
        input.value = "";
      }

      console.log(this.todos);
    });

    this.cleanButton.addEventListener("click", (e) => {
      this.cleanTodoList();
    });

    this.deleteAllButton.addEventListener("click", (e) => {
      if (
        window.prompt("Escribe BORRAR para borrrar todos los todos") ===
        "BORRAR"
      ) {
        this.deleteAllTodos();
      }
    });

    this.list.addEventListener("click", (event) => {
      const target = event.target;

      if (target.matches('input[type="checkbox"]')) {
        this.toggleTodoStatus(target.getAttribute("data-index"));
      }
    });
  }

  addTodo(text) {
    if (text.length === 0) {
      throw new Error("El texto del todo esta vacio");
    }

    const newTodo = {
      text: text,
      done: false,
    };

    this.todos.unshift(newTodo);
    this.sync();
  }

  deleteAllTodos() {
    this.todos = [];
    this.sync();
  }

  toggleTodoStatus(index) {
    const todo = this.todos[index];
    todo.done = !todo.done;
    this.sync();
  }

  cleanTodoList() {
    const cleanList = this.todos.filter((todo) => !todo.done);
    this.todos = cleanList;
    this.sync();
  }

  sync() {
    window.localStorage.setItem(this.keyname, JSON.stringify(this.todos));
    this.render();
  }

  render() {
    this.list.innerHTML = "";
    let i = 0;
    const fragment = document.createDocumentFragment();

    for (const todo of this.todos) {
      const li = document.createElement("li");
      const input = document.createElement("input");

      input.setAttribute("type", "checkbox");
      input.setAttribute("data-index", i);

      if (todo.done) {
        li.classList.add("done");
        input.setAttribute("checked", true);
      }

      input.addEventListener("ckick", (event) => {
        this.toggleTodoStatus(i);
      });

      const p = document.createElement("p");
      p.textContent = todo.text;

      li.append(input);
      li.append(p);
      fragment.append(li);
      i++;
    }
    this.list.append(fragment);
  }
}

const form = document.querySelector("form#new-todo");
const list = document.querySelector("ul#todos");

const myTodos = new TodoList(form, list, "stored-todos");
myTodos.attachEvents();
