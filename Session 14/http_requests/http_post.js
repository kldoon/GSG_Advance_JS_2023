const sendData = (data) => {
  fetch("https://jsonplaceholder.typicode.com/posts",   // change posts to image to get 404 error
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  ).then(response => {
    if (response.ok) {
      // Request is successful, handle the response
      console.log("Post added successfully!");
      response.json().then(data => {
        console.log("Your Post:");
        console.log(data);
      });
    } else {
      // Handle errors from the server (by status code)
      if (response.status === 404) {
        console.log("Resource not found!");
      } else if (response.status === 400) {
        console.log("Bad data!")
      } else if (response.status === 500) {
        console.log("Internal Server Error!");
      }
    }
  }).catch(error => {
    console.log("Fail Adding Your Post!");
    console.log(error);
  });
}

const myData = {
  userId: 9,
  title: 'My Fake Post, Sent to API',
  body: 'Post Body, Hello world.'
};

sendData(myData);