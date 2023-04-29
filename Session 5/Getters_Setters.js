class Person {
  constructor(name) {
    this.name = name;
  }

  get personName() {
    return "*** " + this.name + " ***";
  }
  set personName(n) {
    this.name = "name:" + n;
  }

  ///// Setters and getters (another style)
  /*
  setName(n) {
    this.name = n;
  }
  getName() {
    return this.name;
  }
  */
}

const p1 = new Person();
p1.personName = "Hiba";
// p1.setName("Sarah");

const p2 = new Person();
p2.personName = "Ahamd";
// p2.setName("Saeed");

console.log(p1.personName, p2.personName)
// console.log(p1.getName(), p2.getName());