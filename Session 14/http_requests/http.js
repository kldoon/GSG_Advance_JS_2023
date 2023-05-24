fetch("https://jsonplaceholder.typicode.com/posts", { method: 'GET' })
  .then(async res => {
    const data = await res.json();
    console.log(data);

    // You can use the .then syntax
    // res.json().then(data => {
    //   console.log(data);
    // });
  })
  .catch(err => {
    console.log("Failed to get the data!");
    console.log(err);
  });

// You can use Async/Await
// try {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", { method: 'GET' });
//   console.log(res);
// } catch (err) {
//   console.log("Failed to get the data!");
//   console.log(err);
// }
