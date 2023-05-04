// Object literal notation
const person = {
    firstName: "John",
    "last name": "Doe",
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function () {
        console.log("Hello everyone!");
    },
    score: {
        maths: 90,
        science: 80,
        calcAvg: function () {
            const avg = (90 + 80) / 2;
            console.log("The Average is: " + avg);
            return avg;
        }
    },
    address: null
};

if (typeof (person) === 'object') {

}

console.log(typeof person);
console.log(person.firstName);
console.log(person["last name"]);
console.log(person.age);
console.log(person.hobbies[0]);
console.log(person.score.maths);

person.greet();
person.score.calcAvg();

// Using the new Object() constructor

const person2 = new Object({
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function () {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
});

console.log(typeof person2);
console.log(person2.name);
console.log(person2.hobbies[0]);
person2.greet();
console.log(person2.score.maths);

if (typeof (person) === "object")