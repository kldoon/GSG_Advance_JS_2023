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

// const dataIsReady = data => {
//   console.log(`Hello ${data.name}, you are ${data.age} years old, 
//   your Id is: ${data.id}`);
// }
// const handleError = (err) => {
//   console.log(`Error happened :'( ${err}`);
// }

// fetchData().then(dataIsReady).catch(handleError);

console.log("Program start!");
fetchData()
  .then(data => {
    console.log(`Hello ${data.name}, you are ${data.age} years old, 
    your Id is: ${data.id}`);
  })
  .catch(err => {
    console.error(`Error happened :'( ${err}`);
  })
  .finally(() => {
    console.log("Everything is done!");
  });

console.log("Program end!");