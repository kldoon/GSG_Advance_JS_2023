// Using a constructor function
function Person() {
  this.name = "Ahmad";
  this.age = 20;
  this.hobbies = ['reading', 'games', 'coding'];
  this.greet = function () {
    console.log("Hello Everyone, my name is: " + this.name);
  }
  this.score = {
    maths: 90,
    coding: 100
  }
}

const p1 = new Person();
console.log(typeof p1);
console.log(p1.name);
p1.greet();

const p2 = new Person();
p2.name = "Hiba";
p2.greet();
