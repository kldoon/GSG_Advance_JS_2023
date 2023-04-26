// Using class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.score = {
      maths: 90,
      coding: 100
    }
    this.hobbies = ['reading', 'games', 'coding'];
  }

  greet() {
    console.log('Hello Everyone, my name is: ' + this.name + ', my age is: ' + this.age);
  }
}

const p1 = new Person("Ahmad", 20);
// p1.greet();
console.log(p1.name);
//console.log(p1["name"]);
p1.name = "Hiba";
console.log(p1.name);

p1["score"]["maths"] = 95;
console.log(p1.score);

p1.lastName = "Saeed";
p1["lastName"] = "Saeed";

console.log(p1.lastName);

console.log(p1.hobbies);
delete p1.hobbies;
console.log(p1.hobbies);   // undefined

// for (let i = 0; i < 3; i++) {
//   console.log(p1["score" + i]["maths"])
//   score1
//   score2
//   score3
// }
