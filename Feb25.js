//----MATH ISSUES----//
// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round() -> returns the value of a number rounded to the nearest integer.
// Math.ceil() -> Rounds a number upward to its nearest integer
// Math.floor() -> Rounds a number downward to its nearest integer

Math.round = function(number) {
  let split = number.toString().split(".")
  // console.log(split)
  if (split[1] >= 5) {
    return parseInt(split[0]) + 1
  }
  return parseInt(split[0])
};

Math.ceil = function(number) {
  let split = number.toString().split(".")
  // console.log(split)
  return parseInt(split[0]) + 1
};

Math.floor = function(number) {
  let split = number.toString().split(".")
  // console.log(split)
  return parseInt(split[0])
};

//TEST
console.log(Math.round(0.4)) // => 0
console.log(Math.round(0.5)) // => 1

// console.log(Math.ceil(0.4))// => 1
// console.log(Math.ceil(0.5))// => 1

// console.log(Math.floor(0.4)) // => 0
// console.log(Math.floor(0.5)) // => 0