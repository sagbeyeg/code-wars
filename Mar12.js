//----Reverse FizzBuzz----//
//FizzBuzz is often one of the first programming puzzles people learn. Now undo it with reverse FizzBuzz!
// Write a function that accepts a string, which will always be a valid section of FizzBuzz. Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.

// If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
// All numbers in the sequence will be greater than zero.
// You will never receive an empty sequence.

const reverseFizzBuzz = arr => {
  let splitArray = arr.split( )
  console.log(splitArray)
  return [];
}

// Tests
console.log(reverseFizzBuzz("1 2 Fizz 4 Buzz"))        // -->  [1, 2, 3, 4, 5]
console.log(reverseFizzBuzz("Fizz 688 689 FizzBuzz"))  // -->  [687, 688, 689, 690]
console.log(reverseFizzBuzz("Fizz Buzz"))              // -->  [9, 10]