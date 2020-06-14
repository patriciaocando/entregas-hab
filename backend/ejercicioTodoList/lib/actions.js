const fs = require("fs").promises;
const path = require("path");
const os = require("os");
const keyWords = require("./keywords");
const { formatDistanceToNow } = require("date-fns");
const { es } = require("date-fns/locale");
const chalk = require("chalk");

const todoFile = path.join(os.homedir(), ".tasks.json");

//leer la lista de todos
async function readTodoList() {
  try {
    let todos;
    try {
      const todoBuffer = await fs.readFile(todoFile);
      todos = JSON.parse(todoBuffer.toString());
    } catch (error) {
      todos = { todos: [] };
      await fs.writeFile(todoFile, JSON.stringify(todos));
    }
    return todos;
  } catch (error) {
    console.error(error);
  }
}

// Guardar la lista de todos
async function saveTodos(todoList) {
  try {
    await fs.writeFile(todoFile, JSON.stringify(todoList));
  } catch (error) {
    console.erro(error.message);
  }
}

async function addTodo({ text, priority }) {
  // Abrir la lista actual de todos
  const currentList = await readTodoList();
  // Añadir el todo que recibe al principio

  currentList.todos.unshift({
    text,
    priority,
    done: false,
    date: new Date(),
  });
  // Guardar la lista actualizada
  await saveTodos(currentList);
  await listTodos();
}

async function markAsDone(index) {
  // Abrir la lista actual de todos
  const currentList = await readTodoList();

  // Buscar el todo con el index que recibe
  const totalTodos = currentList.todos.length;
  index = totalTodos - index;
  // Modificar el objecto del todo como done: true
  currentList.todos[index].done = true;
  // Guardar la lista actualizada
  await saveTodos(currentList);
}

async function markAsUnDone(index) {
  const currentList = await readTodoList();

  // Buscar el todo con el index que recibe
  const totalTodos = currentList.todos.length;
  index = totalTodos - index;
  // Modificar el objecto del todo como done: true
  currentList.todos[index].done = false;
  await saveTodos(currentList);
}

async function listTodos() {
  const currentList = await readTodoList();

  if (currentList.todos.length === 0) {
    console.log(`
    Lista de tareas:
        Agrega una nueva tarea a tu lista!`);
  } else {
    console.log(`
  Lista de tareas:
  `);

    for (const todo of currentList.todos.reverse()) {
      let statusTodo = "";
      let priorityTodo = "";
      let indexTodo = currentList.todos.indexOf(todo) + 1;
      if (!todo.done) {
        statusTodo = chalk.bgMagenta(keyWords["status"]["false"]);
      } else {
        statusTodo = chalk.bgCyan(keyWords["status"]["true"]);
      }
      if (todo.priority) {
        priorityTodo = ", " + chalk.bgRed(keyWords["priorityLevel"]["true"]);
      }

      console.log(`${indexTodo}.${
        todo.text
      } (${statusTodo}${priorityTodo}) - hace ${formatDistanceToNow(
        new Date(todo.date),
        {
          locale: es,
        }
      )}
          `);
    }
  }

  //
}

async function cleanTodos() {
  // Abrir la lista actual de todos
  const currentList = await readTodoList();

  // Filtrar los que están marcados como done: true
  for (const todo of currentList.todos) {
    if (todo.done) {
      const index = currentList.todos.indexOf(todo);
      currentList.todos.splice(index, 1);
    }
  }

  // Guardar la lista resultante
  await saveTodos(currentList);
}
async function clearALlTodos() {
  try {
    await fs.unlink(todoFile);
    console.log("Lista de tareas borrada :(");
  } catch (error) {
    console.error("NO he podido borrar el fichero");
  }
}

async function helpTodoApp() {
  console.log(`
    Modo de uso: node todo.js [Opciones]
    
    Opciones:
        Nueva tarea     Agrega nuena tarea a la lista, ejemplo: node todo.js Comprar pan
        --priority      Asigna si una tarea tiene prioridad alta. Ejemplo: node todo.js Comprar pan --priority
        --list          Lista todas las tareas, su prioridad y estado.
        --done=#        Marca la tarea # como HECHA, donde # es el numero de la tarea. 
        --undone=#      Marca la tarea # como PENDIENTE, donde # es el numero de la tarea. 
        --clean         Borra las tareas de la lista marcadas como HECHA.
        --clearAll      Borra TODAS las tareas de la lista.
        --help          Informacion acerca de la aplicacion.
    
    `);
}

module.exports = {
  addTodo,
  markAsDone,
  markAsUnDone,
  listTodos,
  cleanTodos,
  clearALlTodos,
  helpTodoApp,
};
