class Person {
  #name;
  constructor(name) {
    this.#name = name;
    this.#sayHello();
  }
  #sayHello() {
    console.log("Hello world, my name is: " + this.#name);
  }
  set personName(n) {
    this.#name = n;
  }
  get personName() {
    return this.#name;
  }
}

const p1 = new Person("Ahmad");
console.log(p1.personName);

// console.log(p1.#name);   // Syntax error
// console.log(p1.#sayHello);   // Syntax error