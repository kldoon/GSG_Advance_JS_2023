const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 80 },
    { name: "Bob", age: 20 },
    { name: "Mary", age: 75 },
    { name: "Mark", age: 48 },
];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].name);
// }

function printPerson(p) {
    console.log(p.name + " is " + p.age + " years old!");
}

people.forEach(printPerson);

// Alternatively you can write like this
// people.forEach(function (p) {
//     console.log(p.name + " is " + p.age + " years old!");
// });

// ================== map
function isElder(p) {
    return {
        name: p.name,
        age: p.age,
        elder: p.age >= 50 ? true : false
    };
};

const people2 = people.map(isElder);

const aboutPeople = people.map(function (p) {
    return p.name + ' is ' + p.age
        + ' years old, and he is '
        + (p.age >= 50 ? '' : 'not ')
        + 'elder';
});

console.log(people2);
console.log(aboutPeople);


const oldPeople = people.filter(function (p) {
    return (p.age >= 40);
});

console.log(oldPeople);