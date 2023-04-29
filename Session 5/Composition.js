class Address {
  constructor(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
  }
  print() {
    console.log(this.street + ", " + this.city + ", " + this.state);
  }
}

class Person {
  name;
  age;
  address;
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  report() {
    console.log("This is: " + this.name + ", he is: " + this.age + " years old, and he lives in: ");
    this.address.print();
  }
  report(count) {
    console.log(count);
  }
}

const address = new Address("123 Main St", "Hebron", "Westbank");
// console.log(address);
const p1 = new Person("Ahmad", 29, address);

// console.log(p1);
// console.log(p1.address.city);

// p1.address.print();
p1.report();
p1.report(10);