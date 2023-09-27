// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)
var count = 0;
function Counter(n) {
  if (count <= n) {
    console.log(n);
    setTimeout(function () {
      Counter(n + 1);
    }, 1000);
  } else {
    console.log("error");
  }
}
Counter(0);
