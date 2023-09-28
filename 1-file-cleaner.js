// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");
function fileRead(fileName) {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      var read = data;
      var regexPattern = /\s+/g;    
      var newFile = read.replace(regexPattern," ");
      console.log(newFile);
    }
  });
}
fileRead("text.txt");
