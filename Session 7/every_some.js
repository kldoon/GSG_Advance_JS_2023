const people = [
  { name: "John", age: 50 },
  { name: "Jane", age: 3 },
  { name: "Bob", age: 20 },
  { name: "Mary", age: 2 },
  { name: "Mark", age: 18 },
];

const isEveryoneAdult = people.every(function (currentPerson) {
  return currentPerson.age >= 18;
});

console.log("Is everyone adult? " + isEveryoneAdult);

const isSomePeopleAdult = people.some(function (currentPerson) {
  return currentPerson.age >= 18;
});

console.log("Is some people adult? " + isSomePeopleAdult);

// Find the first person that has M in the first letter of his name,
// and his/her age is > 10
const x = people.find(function (currentPerson) {
  if (currentPerson.name[0].toLowerCase() === 'm' && currentPerson.age > 10) {
    return true;
  } else {
    return false
  }
});

console.log(x);