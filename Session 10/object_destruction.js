const info = {
  name: "Ahmad",
  age: 25,
  score: 93.5,
  address: "Nablus",
  university: "Al-Najah",
  courses: 3,
  isGraduated: false
};

// const name = info.name;
// const age = info.age;
// const university = info.university;
const { name: studentName, lastName = "Unknown", age, university, isGraduated, ...rest } = info;

console.log(studentName, lastName, age, university, isGraduated);
console.log(rest);