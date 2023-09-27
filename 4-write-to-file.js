// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

//method-1 using arrow function
function write1() {
  var string1 = "hello world";
  var file = fs.writeFile("b.txt", string1, (err, data) => {
    if (err) {
      console.log(err);
    }
  });
}

//method-2  using callBackfn
function write2() {
  var string2 = "Successfully writern";
  fs.writeFile("b.txt", string2, callBackfn);
}

function callBackfn(err, data) {
  if (err) {
    throw err;
  } else {
    console.log("success");
  }
}

write1();
write2();
