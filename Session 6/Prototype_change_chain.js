// constructor function
function Person() {
  this.name = 'John'
}

// add a property
Person.prototype.age = 20;

// creating an object
const person1 = new Person();

console.log(person1.age); // 20

// changing the property value of prototype
Person.prototype = { age: 50 }

// creating new object
const person2 = new Person();

console.log(person2.age); // 50
console.log(person1.age); // 20

// Prototype Chain

function Person() {
  this.name = 'John'
}

// adding property 
Person.prototype.name = 'Peter';
Person.prototype.age = 23

const person3 = new Person();

console.log(person1.name); // John
console.log(person1.age); // 23


/// Access prototype of object instance
function Person () {
  this.name = 'John'
}

// adding a prototype
Person.prototype.age = 24;

// creating object
const person = new Person();

// accessing prototype property
console.log(person.__proto__);   // { age: 24 }