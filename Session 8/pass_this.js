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


/////  From the future :) 
// What is we used arrow function?
// this will be referencing person2 object in that case 

const person2 = {
  name: 'Ahmad',
  family: 'Saeed',
  siblings: ['Hiba', 'Sarah', 'Jameel'],
  showFamily: function () {
    this.siblings.forEach((sibling) => {
      console.log(sibling + " " + this.family);
    })
  }
}

person.showFamily();