// ## Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

var count = 0;
function counter(n) {
  if (count <= n) {
    console.log(count);
    count = count + 1;
  }
}
setInterval(function () {
  counter(10);
}, 1000);
