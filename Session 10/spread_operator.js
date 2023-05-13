const cities = ['Jerusalem', 'Hebron', 'Ramallah', 'Nablus'];

console.log(cities);
console.log(...cities);

const newCites = ["Jericho", "Jenin", ...cities, "Dura"];
// const newCites = ["Jericho", "Jenin", 'Jerusalem', 'Hebron', 'Ramallah', 'Nablus', "Dura"];

console.log(newCites);

let chars = ['A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

const myArr = [..."Khaldoun Halawani"];
console.log(myArr);

const sum = (a, b, ...args) => {
  console.log(args);
  const initSum = a + b;
  return args.reduce((s, n) => s + n, initSum);
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40, 50, 60));

let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]