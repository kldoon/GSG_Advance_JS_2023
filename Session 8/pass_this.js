function printSiblings(sibling) {
  // console.log(this);
  console.log(sibling + " " + this.family);
}

const person = {
  name: 'Ahmad',
  family: 'Saeed',
  siblings: ['Hiba', 'Sarah', 'Jameel'],
  showFamily: function () {
    this.siblings.forEach(printSiblings, this)
  }
}

person.showFamily();