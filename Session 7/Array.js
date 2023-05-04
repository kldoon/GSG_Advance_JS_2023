const arr = [1, 2, 3, true, 4, "Hello", 5];

const arr2 = new Array(5);
// console.log(arr2);

// const arr3 = new Array(1, 2, 3, 4, 5, 6);
// console.log(arr3);

arr.push(100);
arr.unshift(-100);

const vLast = arr.pop();
console.log(vLast);

const vFirst = arr.shift();
console.log(vFirst);

arr[3] = false;
console.log(arr[3]);
console.log(arr);
