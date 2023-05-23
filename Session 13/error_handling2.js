try {
  const res = summation();
  console.log("The result is:");
  console.log(res);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("You are calling a function that doesn't exist");
  } else if (error instanceof TypeError) {
    console.log("Something is wrong your your types!");
  } else {
    console.log("Something is wrong!");
  }
}


try {
  // open File
  // read File
} catch (error) {
  // log error
} finally {
  // close File
}