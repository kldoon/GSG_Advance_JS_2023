const person = {
  name: 'Ahmad',
  greet: function () {
    console.log(this);
    console.log("Hello, my name is: " + this.name);
  }
}

function sayHello() {
  console.log(this);
  console.log("Hello, my name is: " + this.name);
}

// person.greet();
// sayHello();

function Person(name) {
  this.name = name;
  console.log(this);
}

const p1 = new Person("Ahmad");
const p2 = new Person("Hiba");


// I am passing a specific value of this to the function
sayHello.call(p1);
sayHello.call({ type: 'animal', age: 199, name: 'tortoise' });