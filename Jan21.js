//----JADEN CASING STRINGS----// 
// Your task is to convert strings to how they would be written by Jaden Smith (capitalized).
//   Example:
// Not Jaden - Cased: "How can mirrors be real if our eyes aren't real"
// Jaden - Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function (arg) {
  return this.split(" ").map(word =>
    word.charAt(0).toUpperCase() + word.slice(1, word.length)
  ).join(" ")
};

var str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase())


//----SUM OF DIGITS/DIGITAL ROOT----//
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
  var finalSum = sum(n)
  while(finalSum >= 10){
      finalSum = sum(finalSum)
  }
  return finalSum
}
const sum=(n)=> n.toString().split("").map(num => parseInt(num)).reduce((acc, current)=>acc+current)


//----WHO LIKES IT?----//
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

const likes = (names) => {
  if (names.length == 0 || names.length == 1)
    return `${names.length === 0 ? "no one" : names[0]} likes this`;
  else {
    return `${names.length > 3
      ? `${names[0]}, ${names[1]} and ${names.length - 2} others`
      : names.length == 2
      ? `${names[0]} and ${names[1]}`
      : `${names[0]}, ${names[1]} and ${names[2]}`} like this`
  }
};