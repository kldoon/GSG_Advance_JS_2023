interface Address {
  city: string;
  street: string;
  houseNumber?: number;
}

interface Person {
  name: string;
  age: number;
  isCitizen?: boolean;
  address?: Address;
}

const p1: Person = {
  name: "Ahmad",
  age: 20,
  isCitizen: true,
  address: {
    city: "Ramallah",
    street: "Manarah"
  }
};

const p2: Person = { name: "Hiba", age: 25, address: { city: "Jerusalem", street: "Jafa" } };
const p3: Person = { name: "Saeed", age: 25 };

const add1: Address = { city: "Hebron", street: "Ain Sarah", houseNumber: 10 };
const pArr: Person[] = [];
pArr.push(p1);
pArr.push(p2);
pArr.push(p3);

console.log(pArr);

// Those will raise an error
// pArr.push("ASADFADSF");
// pArr.push(56);
// pArr.push(add1);