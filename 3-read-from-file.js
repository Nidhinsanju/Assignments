// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

//method 1
function read1() {
  var readFile = fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}

//method 2

function read2() {
  var readFile = fs.readFile("a.txt", "utf-8", callBackfn);
}

function callBackfn(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}
read1();
read2();
