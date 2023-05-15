const outerFunc = () => {
  let outerVar = "Hello";

  const innerFunc = () => {
    console.log(outerVar);
  }

  return innerFunc;
}

let closure = outerFunc();

closure();

///////////////////////

const greet = (message) => {
  const title = "Mr/Mrs";

  return (name) => {
    console.log(`${message} ${title} ${name}`);
  }
};

const sayHi = greet("Hi");
const sayHello = greet("Hello");

sayHi("Ahmad");
sayHello("Hiba");

// IIFE
// greet("Hi")("Nada");

///////////////////// Another example of closures 
const createCounter = (initialValue) => {
  let counter = initialValue;
  return () => {
    counter++;
    console.log(counter);
  }
};

const counter1 = createCounter(0);
counter1();
counter1();
counter1();

const counter2 = createCounter(100);
counter2();
counter2();
counter2();
counter2();
counter2();