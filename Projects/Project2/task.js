class Task {
  id;
  title;
  description;
  completed = false;
  dueDate;
  constructor(id, title = "", description = "", dueDate = "") {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  setCompleted() {
    this.completed = true;
  }
}

// We can use the prototype to add attributes and methods 
Task.prototype.description = "";
Task.prototype.title = "";
Task.prototype.getTaskInfo = function () {
  return `Description: ${this.description}, Due Date: ${this.dueDate}, Priority: ${this.priority}`;
};



export default Task;