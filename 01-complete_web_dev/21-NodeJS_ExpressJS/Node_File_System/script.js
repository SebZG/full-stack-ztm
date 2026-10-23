// const fs = require("fs");
const { readFile, readFileSync, appendFile, writeFile, unlink } = require("fs");

// Asynchronously reads the content of the file "text.txt" and logs it to the console. If there is an error while reading the file, it throws an error.
readFile("text.txt", (err, data) => {
  if (err) {
    throw err;
  }

  console.log("Async", data.toString("utf-8")); // Need to decode the buffer to string using toString() method
});

// Pauses the execution of the code until the file is read and then logs the content of the file to the console. The second part of the code reads the file synchronously and logs its content to the console as well.
// const file = readFileSync("text.txt");
// console.log("Sync", file.toString("utf-8"));

// APPEND
// const data1 = "Appended text";
// appendFile("text.txt", data1, "utf-8", (err) => {
//   if (err) {
//     throw err;
//   }
// });

// WRITE
// const data2 = "Written text";
// writeFile("write.txt", data2, "utf-8", (err) => {
//   if (err) {
//     throw err;
//   }
// });

// DELETE
// unlink("write.txt", (err) => {
//   if (err) {
//     throw err;
//   }
// });
