//----HIGHEST RANK NUMBER IN AN ARRAY----//
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

function highestRank(arr){
  let sorted = arr.sort()
  highestNum = sorted[sorted.length-1]
  console.log(highestNum)
  for (let i=0; i<sorted.length; i++){

  }
  return highestNum
}
//TEST

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])) // 12