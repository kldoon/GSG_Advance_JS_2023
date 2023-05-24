const fs = require('fs');
// import fs from 'fs';
let jsonData;

const readAFile = () => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      console.log("Something went wrong while reading the file!");
      console.log(err.message);
    } else {
      jsonData = JSON.parse(data);  // Convert string to json
      jsonData[0].name = "Mohammad";   // Edit the json
      jsonData[0].age = 55;   // Edit the json
      console.log(jsonData);   // print the json

      writeToJSON();   // we call this here because the readFile function is async
    }
  });
}

const writeToFile = () => {
  const myData = "Hello from the code!";
  fs.writeFile("data2.txt", myData, 'utf-8', (err) => {
    if (err) {
      console.log("Something went wrong while writing to the file!");
      console.log(err.message);
    } else {
      console.log("File has been written.");
    }
  });
}

const writeToJSON = () => {
  // const myData = "Hello from the code!";
  fs.writeFile("data.json", JSON.stringify(jsonData), 'utf-8', (err) => {
    if (err) {
      console.log("Something went wrong while writing to the file!");
      console.log(err.message);
    } else {
      console.log("File has been written.");
    }
  });
}

const appendToFile = () => {
  const newData = "\nHello from the code!";
  fs.appendFile("data.txt", newData, "utf-8", (err) => {
    if (err) {
      console.log("Something went wrong while appending to the file!");
      console.log(err.message);
    } else {
      console.log("File has been updated.");
    }
  })
}

const renameFile = () => {
  fs.rename("abc.dat", "xyz.dat", (err) => {
    if (err) {
      console.log("Failed rename file!");
      console.log(err.message);
    } else {
      console.log("File has been renamed.");
    }
  })
}

const deleteFile = () => {
  fs.unlink("xyz.dat", (err) => {
    if (err) {
      console.log("Failed delete file!");
      console.log(err.message);
    } else {
      console.log("File has been deleted.");
    }
  })
}

readAFile();
writeToFile();
appendToFile();
renameFile();
deleteFile();
