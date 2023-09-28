/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function task7(time) {
  return new Promise((resolve, reject) => {
    if (time <= 0) {
      reject("given a no natural value");
    } else {
      setTimeout(() => {
        resolve();
      }, time * 1000);
    }
  });
}
task7(2)
  .then(() => {
    console.log("The task has been excecuted successfully");
  })
  .catch((err) => {
    console.log(err);
  });
