// Write a short program that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    console.log(
      i % 3 == 0 && i % 5 == 0
        ? "FizzBuzz"
        : i % 3 == 0
        ? "Fizz"
        : i % 5 == 0
        ? "Buzz"
        : i
    );
  }
}
