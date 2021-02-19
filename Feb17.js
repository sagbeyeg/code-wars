//----CONSECUTIVE STRINGS----//
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(arr, k) {
  let newWords = []
  if (arr.length === 0 || k > arr.length || k <= 0){
    return ""
  } else {
    for(let i = 0; i< arr.length - 1; i++){
      newWords.push(`${arr[i]}${arr[i+1]}`)
    }
  }
  return newWords.reduce((a,b) => a.length >= b.length ? a : b)
}


// Examples:
// let strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
// let k = 2

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)) //"folingtrashy"

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)) // --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption
