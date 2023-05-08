// console.log(x);  // will fire an error (let is not hoisted)
let x = 10;
console.log(x);

const y = 100;
console.log(y);
y = 200;

function test() {
  if (true) {
    let z = 20;
    console.log("from if:" + z);
  }
  // console.log("from function:" + z);   // will fire an error
}

test();