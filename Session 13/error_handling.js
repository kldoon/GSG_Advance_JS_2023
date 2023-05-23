try {
  const res = summation();
  console.log("The result is:");
  console.log(res);
} catch (error) {
  console.log("Something went wrong!");
  // console.log(error);
} finally {
  console.log("Finally block");
}

/////////////////////
const fetchAsync = async (value) => {
  console.log("From fetchAsync");
  if (value === 0) {
    throw ("Value should not be 0");
  }
}

const getData = async () => {
  let res;
  try {
    res = await fetchAsync(0);
    console.log("Operation Success:", res);
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
    res = { name: "Unknown", age: 0 };
  }

  console.log("Anyways the result is: ", res);
}

getData();