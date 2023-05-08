const firstName = "Ahmad";
const lastName = "Saeed";
const age = 25;

// Hello my name is Ahmad Saeed, I am 25 years old.
const str = "Hello my name is " + firstName + " " + lastName + ", I am " + age + " years old";
console.log(str);


//" "  ' ' ` `
const str2 = `Hello my name is ${firstName} ${lastName.toLowerCase()}, I am ${age + 5} years old.`;
console.log(str2);

const str3 = "Hello my name" +
  " is Ahmad Saeed" +
  ", I am 25 years old";

const str4 = `Hello my name
   is Ahmad Saeed
   I am 25 years old`;

console.log(str3);
console.log(str4);