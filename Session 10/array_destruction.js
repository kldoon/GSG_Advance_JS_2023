const numbers = [100, 200, 300, 400];
// const v1 = 100;
// const v2 = 200;
// const v3 = 300;
const [v1, v2, v3] = numbers;

console.log(v1, v2, v3);

const info = ["Ahmad", 25, 93.5, "Nablus", "Al-Najah", 3, false];
const [name, age, score, address, ...others] = info;

console.log(name, age, score, address);
console.log(others);

// Example use case in ReactJS
// const [value, setValue] = useState(50);