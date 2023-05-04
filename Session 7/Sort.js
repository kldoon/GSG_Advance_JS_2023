const arr = [10, 11, 1, 2, 5, 3];
arr.sort();

// console.log(arr);

function compare(v1, v2) {
    if (v1 < v2) return -1
    if (v1 > v2) return 1;
    return 0;
}

arr.sort(compare);
console.log(arr);

// ====================

let myArray = [
    { name: 'John', age: 30, mark: 91 },
    { name: 'Jane', age: 25, mark: 80 },
    { name: 'Bob', age: 40, mark: 93 }
];

function compareByAge(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
};

myArray.sort(compareByAge);

myArray.sort(function compareByMark(a, b) {
    // Sort by mark desc
    if (a.mark < b.mark) return 1;
    if (a.mark > b.mark) return -1;
    return 0;
});

console.log(myArray);