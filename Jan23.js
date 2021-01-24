//----FIND THE ODD INTEGER----//
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  var valuePairs = {}
  A.sort().map(num => {
    valuePairs[num] ? valuePairs[num]++ : valuePairs[num] = 1
  })
  for (let key of Object.keys(valuePairs)) {
    const value = valuePairs[key];
    if (value % 2 != 0) return parseInt(key)
  }
}
//TEST
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))

//BEST PRACTICES
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);