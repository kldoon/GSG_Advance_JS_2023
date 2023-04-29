class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hello everyone, my name is: " + this.name);
  }
}

class Student extends Person {
  mark;
  constructor(name, mark) {
    super(name);
    this.mark = mark;
  }

  // Override the parent class greet function
  greet() {
    console.log("Hello this is: " + this.name + ", My mark is: " + this.mark);
  }
}

const std1 = new Student("Ahmad", 90);

console.log(std1);
std1.greet();

