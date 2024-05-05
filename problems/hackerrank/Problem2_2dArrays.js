/*
    Problem:
    Today, we are building on our knowledge of arrays by adding another dimension. Check out the Tutorial tab for learning materials and an instructional video.

    Context
    Given a 2D Array, :

    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0
    We define an hourglass in to be a subset of values with indices falling in this pattern in 's graphical representation:

    a b c
    d
    e f g
    There are hourglasses in , and an hourglass sum is the sum of an hourglass' values.

    Task
    Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

    Example

    In the array shown above, the maximum hourglass sum is for the hourglass in the top left corner.

    Input Format

    There are lines of input, where each line contains space-separated integers that describe the 2D Array .

    Constraints

    Output Format

    Print the maximum hourglass sum in .

    Sample Input

    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 2 4 4 0
    0 0 0 2 0 0
    0 0 1 2 4 0
    Sample Output

    19
    Explanation

    contains the following hourglasses:

    1 1 1   1 1 0   1 0 0   0 0 0
    1       0       0       0
    1 1 1   1 1 0   1 0 0   0 0 0

    0 1 0   1 0 0   0 0 0   0 0 0
    1       1       0       0
    0 0 2   0 2 4   2 4 4   4 4 0

    1 1 1   1 1 0   1 0 0   0 0 0
    0       2       4       4
    0 0 0   0 0 2   0 2 0   2 0 0

    0 0 2   0 2 4   2 4 4   4 4 0
    0       0       2       0
    0 0 1   0 1 2   1 2 4   2 4 0
    The hourglass with the maximum sum () is:

    2 4 4
    2
    1 2 4
*/

// My Solution:

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

// Initialize variables to store input and line index
let inputString = "";
let currentLine = 0;

// Event listener for input data
process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

// Event listener for end of input
process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

// Function to read a line from inputString
function readLine() {
  return inputString[currentLine++];
}

// Main function where the processing happens
function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  // Calculate the sum of each hourglass in the 2D array and store the results in 'result' array
  let result = arr.reduce((target, rows, index) => {
    rows.reduce((subTarget, item, subIndex) => {
      index < arr.length - 2 &&
        subIndex < arr.length - 2 &&
        target.push(
          arr[index][subIndex] +
            arr[index][subIndex + 1] +
            arr[index][subIndex + 2] +
            arr[index + 1][subIndex + 1] +
            arr[index + 2][subIndex] +
            arr[index + 2][subIndex + 1] +
            arr[index + 2][subIndex + 2]
        );
    }, []);

    return target;
  }, []);

  // Find the maximum sum from the 'result' array and print it
  console.log(Math.max.apply(null, result));
}
