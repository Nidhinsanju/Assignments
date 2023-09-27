// /*
// Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
// Try running it for
// 1. Sum from 1-100
// 2. Sum from 1-100000
// 3. Sum from 1-1000000000
// Hint - use Date class exposed in JS
// /*

function calculate(n) {
  var startTime = new Date().getTime();
  var count = 0;
  for (i = 0; i <= n; i++) {
    count = count + i;
  }
  var endTime = new Date().getTime();
  var OperationTime = endTime - startTime;
  return { count: count, OperationTime: OperationTime };
}

var output1 = calculate(100);
var output2 = calculate(100000);
var output3 = calculate(1000000000);

console.log("sum of 1-100", output1.count);
console.log("operation time taken for 1-100", output1.OperationTime, "ms");

console.log("sum of 1-100000", output2.count);
console.log("operation time taken for 1-100000", output2.OperationTime, "ms");

console.log("sum of 1-1000000000", output3.count);
console.log(
  "operation time taken for 1-1000000000",
  output3.OperationTime,
  "ms"
);
