const fs = require("fs").promises;
const minimist = require("minimist");

const {
  addTodo,
  markAsDone,
  markAsUnDone,
  listTodos,
  cleanTodos,
  clearALlTodos,
  helpTodoApp,
} = require("./lib/actions");

async function todoList() {
  const args = minimist(process.argv.slice(2));
  const { _, priority, list, done, undone, clean, clearAll, help } = args;
  if (list) {
    await listTodos();

    process.exit();
  }
  if (done) {
    await markAsDone(done);
    //marcar el todo done como hecho
    console.log(`
    Marco el todo ${done} como HECHO`);
    await listTodos();
    process.exit();
  }
  if (undone) {
    await markAsUnDone(undone);
    //marcar el todo numero undone como no hecho
    console.log(`
    Marco el todo ${undone} como PENDIENTE`);
    await listTodos();
    process.exit();
  }
  if (clean) {
    await cleanTodos();
    //borro de la lista todos hechos
    console.log(`
    Has limpiado tus tareas hechas`);
    await listTodos();
    process.exit();
  }
  if (clearAll) {
    await clearALlTodos();
    process.exit();
  }
  if (help) {
    await helpTodoApp();
    process.exit();
  }
  const newTodo = _.join(" ");
  if (newTodo.length > 0) {
    //add newTodo
    console.log(`
    Has agregado una nueva tarea!`);
    await addTodo({
      text: newTodo,
      priority: priority ? true : false,
    });

    process.exit();
  } else {
    console.log("Nada que hacer");
  }
}
todoList();
