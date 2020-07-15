const TodoItem = require("./models").toDoItem;
console.log("to do test", TodoItem)
// if models.key is undefined log test models(back a step)
// const models = require("./models");
// console.log("to do test", models)

async function createSampleTodoItems() {
  try {
    const todo1 = await TodoItem.create({
      task: "Clean bedroom",
      important: false,
      toDoListId: 3
    });
    const todo2 = await TodoItem.create({
      task: "Learn to code",
      important: true,
      toDoListId: 1
    });
    const todo3 = await TodoItem.create({
      task: "Have fun",
      important: true,
      toDoListId: 2
    });

    return [todo1, todo2, todo3].map(item => item.get({ plain: true }));
  } catch (e) {
    console.error(e);
  }
}

createSampleTodoItems().then(todos => console.log(todos));