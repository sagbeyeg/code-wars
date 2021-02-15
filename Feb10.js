//----HIGHEST RANK NUMBER IN AN ARRAY----//
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

function highestRank(arr){
  let frequency = {}
  for (let i=0; i<arr.length; i++){
    if (frequency[arr[i]]){
      frequency[arr[i]] += 1
    } else {
      frequency[arr[i]] = 1
    }
  }
  let keyArray = Object.keys(frequency)
  let highest = keyArray[0]
  for (let j=0; j<keyArray.length; j++){
    frequency[keyArray[j]] >= frequency[highest] ? highest = keyArray[j] : null
  }
  return parseInt(highest)
}
//TEST

console.log(highestRank([12, 4, 10, 4, 8, 12, 7, 4, 6, 4, 10, 10, 12])) // 12
// console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])) // 3