const getSummary = (name: string, age: number = 20): string => {
  const summary: string = `Hello ${name},
  you need ${100 - age} years to get to 100 years old`;
  return summary;
}

let result: string;
result = getSummary("Ahmad", 25);
console.log(result);
