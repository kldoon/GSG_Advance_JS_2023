import Task from './task.js';
import prompt from 'prompt-sync';

const t1 = new Task(Math.round(Math.random() * 1000), "AAAAA", "Lorem ipsum dolor, sit amet consectetur");
const t2 = new Task(Math.round(Math.random() * 1000), "BBBBB", "adipisicing elit. Laudantium iure illum");
const t3 = new Task(Math.round(Math.random() * 1000), "CCCCC", "Laudantium iure illum rem vero labore similique voluptate");
const t4 = new Task(Math.round(Math.random() * 1000), "DDDDD", "adipisicing elit. Laudantium iure illum rem vero labore similique voluptate");

let todo = [t1, t2, t3, t4];

const input = prompt();

const printMenu = () => {
  console.log(`
  *********************************
   Select an action:
    1) Add a new task
    2) List all tasks
    3) List completed tasks
    4) Mark the task as done
    5) Delete a task
    6) Sort tasks by the due date
    7) Sort tasks by ID
    8) Clear all tasks
    0) Exit
  *********************************
`);
}

const addItem = () => {
  const title = input("Please enter title:");
  const desc = input("Please enter description:")
  const newTask = new Task(Math.round(Math.random() * 1000), title, desc);
  todo.push(newTask);
}

const formatTask = task => (
  `${task.id}: ${task.title}${task.completed ? '[DONE]' : ''}\n${task.description}\n----------------------------------`
);

const printAllTasks = () => {
  const allTasks = todo.map(formatTask);
  allTasks.forEach(item => console.log(item));
}

const printCompletedTasks = () => {
  const completedTasks = todo.filter(task => task.completed).map(formatTask);
  completedTasks.forEach(item => console.log(item));
}

const markTaskAsDone = () => {
  const id = Number(input("Enter done task ID:"));
  const taskInd = todo.findIndex(item => item.id === id);
  todo[taskInd].completed = true;

  // This return the task by ref
  // const task = todo.find(item => item.id === id);
  // task.completed = true;
}

const deleteTask = () => {
  // Delete using filter
  const id = Number(input("Enter task ID:"));
  todo = todo.filter(task => task.id !== id);

  // Delete using splice
  // const tInd = todo.findIndex(task => task.id === id);
  // todo.splice(tInd, 1)
}

const clearAllTasks = () => {
  todo = [];
  // todo.splice(0);
}

const sortTaskByID = () => {
  todo.sort((t1, t2) => t1.id >= t2.id ? 1 : -1);  // ASC
  // todo.sort((t1, t2) => t1.id - t2.id);  // ASC
}

const main = () => {
  while (true) {
    printMenu();
    const choice = input("Enter Choice Number:");
    switch (choice) {
      case "1":
        addItem();
        break;
      case "2":
        printAllTasks();
        break;
      case "3":
        printCompletedTasks();
        break;
      case "4":
        markTaskAsDone();
        break;
      case "5":
        deleteTask();
        break;
      case "7":
        sortTaskByID();
        break;
      case "8":
        clearAllTasks();
        break;
      case "0":
        return;

      default:
        break;
    }
  }

}


main();