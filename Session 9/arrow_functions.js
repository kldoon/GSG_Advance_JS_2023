function sum(n1, n2) {
  const result = n1 + n2;
  return result;
}

const sum2 = (n1, n2) => {
  const result = n1 + n2;
  return result;
}


const sum3 = (n1, n2) => n1 + n2;
const PI = () => 3.1415;

console.log(typeof sum);
console.log(typeof sum2);

console.log(sum3(10, 20));

console.log(PI());
////////////////////

const cities = ['jerusalem', 'hebron', 'ramallah', 'nablus'];

cities.map(function (city) {
  return city.charAt(0).toUpperCase() + city.slice(1);
});

// cities.forEach((city) => {
//   console.log(city);
// });

const newCites = cities.map((city) => city.charAt(0).toUpperCase() + city.slice(1));
console.log(newCites);

///////////////////////  this in arrow function
function Car() {
  this.speed = 0;
  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(() => {
      console.log(this);
      console.log(this.speed); // undefined for normal function, or 50 for arrow function
    }, 1000);
  };
}
let car = new Car();
car.speedUp(50);