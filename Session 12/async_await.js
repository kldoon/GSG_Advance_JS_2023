const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    // This will take a lot of time (3 Seconds)
    setTimeout(() => {
      const data = {
        name: "ahmad",
        age: 25,
        id: Math.random() * 100
      }
      if (data.id >= 50) {
        resolve(data);
      } else {
        // It means the process failed X) 
        reject("Failed to get user");
      }
    }, 3000);
  });
  return promise;
}

// async function main(params) {
// }

const main = async () => {
  console.log("Program start!");

  try {
    const data = await fetchData();
    console.log(`Hello ${data.name}, you are ${data.age} years old, 
    your Id is: ${data.id}`);
  } catch (error) {
    console.error(`Error happened :'( == ${error}`);
  }
  
  console.log("Program end!");
}

main();
