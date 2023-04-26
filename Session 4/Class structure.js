class Person {
  score;
  hobbies = [];
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hello Everyone, my name is: ' + this.name + ', my age is: ' + this.age);
  }

  set personName(newName) {
    this.name = newName.toUpperCase();
  }

  get personName() {
    return this.name;
  }
}

const p1 = new Person("Ahmad", 20);

p1.score = {};
p1.score.maths = 90;
p1.score.coding = 92;

p1.hobbies = ['reading', 'games', 'coding'];

p1.greet();
console.log(p1);

p1.personName = "Sarah";
console.log(p1.personName);
