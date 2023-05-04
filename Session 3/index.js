// Primitive types
let firstName = "Ahmad";   // string: String
const lastName = "Saeed";
const result = "Hello " + firstName + " " + lastName;

console.log(result);

const num1 = 3;
const num2 = 50;

console.log(num1 + num2);

const major = "Math Science";
if (major.includes("Computer")) {
    console.log("Welcome!");
}

// Object types
const strObj = Object.toString(result);
console.log(strObj);

const time = new Date(2020, 5, 13);
console.log(time);
console.log(time.toLocaleDateString());