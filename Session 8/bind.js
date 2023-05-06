const person = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

const p2 = { name: "Ahmad" };
const sayHello = person.greet.bind(p2);

sayHello();


////////////////////

const person3 = {
  name: 'Ahmad',
  family: 'Saeed',
  siblings: ['Hiba', 'Sarah', 'Jameel'],
  showFamily: function () {
    this.siblings.forEach(function (sibling) {
      // console.log(this);
      console.log(sibling + " " + this.family);
    }.bind(this))
  }
}

person3.showFamily();