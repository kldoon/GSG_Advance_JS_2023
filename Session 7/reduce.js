const people = [
  { name: "John", age: 5 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Mary", age: 12 },
  { name: "Mark", age: 28 },
];

const totalAge = people.reduce(function (acc, currentPerson) {
  if (currentPerson.age >= 18) {  // Only sum the age of the adult persons
    return acc + currentPerson.age;
  } else {
    return acc;
  }
}, 0);

console.log("Total Ages: " + totalAge);

// We can do this better with filter. This is just another example of reduce
const adults = people.reduce(function (acc, currentPerson) {
  if (currentPerson.age >= 18) {  // Only add adult persons
    acc.push(currentPerson);
    return acc;
  } else {
    return acc;
  }
}, []);

console.log(adults);