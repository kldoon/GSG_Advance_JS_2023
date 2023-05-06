const fruits = ['Apples', 'Banana'];

const fruits_copy = Array.from(fruits);

console.log(fruits);
console.log(fruits_copy);

const fruits_copy2 = fruits.slice();
console.log(fruits_copy2);

const fruits_copy3 = [...fruits];
console.log(fruits_copy3);

////////////// What shallow copy mean
function Person(name) {
  this.name = name;
}

const pArr = [
  new Person("Ahmad"),
  new Person("Hiba"),
  new Person("Saeed")
];

const pArrCopy = Array.from(pArr);

pArr[0].name = "Mohammad";

console.log(pArr);
console.log(pArrCopy);
