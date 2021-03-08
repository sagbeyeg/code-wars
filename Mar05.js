//----SORT - ONE, THREE, TWO----//
//Hey You !
// Sort these integers for me ...
// By name ...

// Do it now !

// Input
// Range is 0-999
// There may be duplicates
// The array may be empty

// Notes
// Don't pack words together:

// e.g. 99 may be "ninety nine" or "ninety-nine"; but not "ninetynine"
// e.g 101 may be "one hundred one" or "one hundred and one"; but not "onehundredone"
// Don't fret about formatting rules, because if rules are consistently applied it has no effect anyway:
// e.g. "one hundred one", "one hundred two"; is same order as "one hundred and one", "one hundred and two"
// e.g. "ninety eight", "ninety nine"; is same order as "ninety-eight", "ninety-nine"
// ```if:c
// For C code the input array may be NULL. The return value is freed if non-NULL.

function sortByName(ary) {
  // create hashmap
  const numToWord = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    15: "fifteen",
    20: "twenty",
    30: "thirty",
    50: "fifty"
  }

  
  const convertToWords = num => {
    if (numToWord[num]) {
      numToWord[num]
    } else if (num.toString().length === 2 && num < 20) {
      numToWord[num[0]] + "teen"
    } else if (num.toString().length === 2 && num > 20) {
      numToWord[num[0]] + "ty"
    }
    else if (num.toString().length === 3) {
      numToWord[num[0]] + "hundred"
    }
  } 
  
  
  let arrayOfWords = {}
  let sorted = []

  //iterate through array and convert to words

  return []
}

console.log(sortByName([1, 2, 3, 4])) //=> 4, 1, 3, 2
// Equivalent names: "one", "two", "three", "four"
// Sorted by name: "four", "one", "three", "two"
