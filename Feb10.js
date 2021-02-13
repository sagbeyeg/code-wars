//----HIGHEST RANK NUMBER IN AN ARRAY----//
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

function highestRank(arr){
  let sorted = arr.sort((a,b) => a-b)
  console.log(sorted)
  highestNum = 0
  // console.log(highestNum)
  frequency = {}
  for (let i=0; i<sorted.length; i++){
    if (frequency[sorted[i]]){
      frequency[sorted[i]] += 1
    } else {
      frequency[sorted[i]] = 1
    }
  }

  console.log(frequency)
  return highestNum
}
//TEST

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 10, 12])) // 12
// console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])) // 3