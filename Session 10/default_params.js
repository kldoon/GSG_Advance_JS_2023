const greet = (address, name = "No one", age = "unknown") => {
  console.log(`Hello ${name}, you age is ${age}`);
  console.log(`Your address is: ${address}`);
}

greet("Hebron", 19);