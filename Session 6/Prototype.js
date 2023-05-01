// Find out what constructor created an object.
let str1 = new String("Hello World");
let str2 = "Mahmoud";
console.log(str1.constructor);
console.log(str2.constructor);

console.log(Person.constructor);
console.log(p1.constructor);

const arr = [1, 2, 3, 4, 5];
console.log(arr.constructor);

// Access the prototype of any object

// Try in browser console
function Person (name) {
  this.name = name;
  this.greet = function () {
      return ('Hello' + ' ' + this.name);
  }
}
console.log(Person.prototype);

function exampleFunc(){
return 0;
}
console.log(exampleFunc.prototype);

console.log(Array.prototype);
// Look at the methods and the constructor of that array

///////////// Extend Constructors Features
Person.prototype.age=25;
Person.prototype.introduceYourself= function(){
	return "Hello, this is " + this.name + ", I am " + this.age + " years old!"
}

Person.introduceYourself();

// Add a method to the Object constructor
Object.prototype.niceToString = function (){
  return "Hello Friend :), this is: " + this.toString();
}

// Do it with String
String.prototype.toKebabCase= function(){
  let result= this;
  return result.replaceAll(" ", "-");
}

const stri1 = "my variable name";
const stri2= new String("Hello My NAME is AhMaD");
console.log(stri1.toKebabCase());
console.log(stri2.toKebabCase());
