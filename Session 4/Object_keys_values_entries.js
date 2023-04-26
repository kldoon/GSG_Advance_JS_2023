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

// console.log(typeof Person);
// console.log(typeof p1);

const keys = Object.keys(p1);
// console.log(keys);

const values = Object.values(p1);
//console.log(values);

console.log(p1[keys[1]]);

const entries = Object.entries(p1);
console.log(entries);

for (let i = 0; i < keys.length; i++) {
  if (keys[i] !== 'age') {
    console.log(keys[i]);
    console.log(p1[keys[i]]);
  }
}

for (let key in p1) {
  console.log(key);
  if (p1.hasOwnProperty(key)) {
    console.log(p1[key]);
  }
}


const p2 = p1;
p2.name = "Hiba";

console.log(p1.name);
console.log(p2.name);
