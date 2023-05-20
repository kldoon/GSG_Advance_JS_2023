// Examples of synchronous programming in JavaScript

const func1 = () => {
  console.log("Task 1 finished!")
}

const func2 = () => {
  console.log("Task 2 finished!")
}

const longTimeFunc = () => {
  let start = Date.now();
  while (Date.now() - start < 5000) {
    // Do nothing
  }

  return "Long Task finished!";
}

const func3 = (msg) => {
  console.log(msg)
}

const func4 = () => {
  console.log("Task 4 finished!")
}

func1();
func2();
const res = longTimeFunc(); // Takes long time (5 seconds)
func3(res);
func4();