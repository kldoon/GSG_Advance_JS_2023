const mySet = new Set();

const obj = { name: "Hiba" };
mySet.add(1);
mySet.add(2);
mySet.add("Ahmad");
mySet.add(obj);

mySet.add(1);
mySet.add("Ahmad");
mySet.add(obj);  // This will be ignored
mySet.add({ name: "Hiba" });  // This will be added because it's different reference

console.log(mySet);
console.log("Set Size: ", mySet.size);

console.log(mySet);
console.log("Does it has Ali? ", mySet.has("Ali"));
console.log("Does it has Hiba Object? ", mySet.has({ name: "Hiba" }));

mySet.forEach((value) => {
  console.log(value);
});

mySet.delete(1);

const mySetEntries = mySet.entries();
console.log(mySetEntries);

// Convert set to array
// const myArray = Array.from(mySet);
const myArray = [...mySet];
console.log("The set Array:", myArray);

mySet.clear();

const mySet2 = new Set("Hello World");
console.log(mySet2);

const arr = [1, 2, 5, 8, 3, 5, 5, 1, 3, 7, 9, 8, 10, 10, 125, 14, 13];
console.log(arr);
const deDuplicatedArray = [...new Set(arr)];
console.log(deDuplicatedArray);