const fetchData = (callback) => {
  setTimeout(() => {
    const msg = "Hello, that took a lot of time!";
    callback(msg);   // callback points to the printWhenDone function
  }, 3000);
}

const printWhenDone = (data) => {
  console.log(data);
}

console.log("Program start!");
fetchData(printWhenDone);
console.log("Program end!");

// If the code was synchronous, we will use the following
// const res = fetchData();
// console.log(res);


// callback hell, pyramid of doom
getData(function (a) {
  getMoreData(a, function (b) {
    getEvenMoreData(b, function (c) {
      getEvenEvenMoreData(c, function (d) {
        getFinalData(d, function (finalData) {
          console.log(finalData);
        });
      });
    });
  });
});