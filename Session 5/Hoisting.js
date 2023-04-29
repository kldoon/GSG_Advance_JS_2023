const p1 = new Person();
// This will through a reference error, 
// because we should declare the class before using it.

class Person {
  constructor(name) {
    this.name = name;
  }
}
