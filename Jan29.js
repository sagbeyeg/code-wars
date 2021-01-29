// //----Human readable duration format----//

// function formatDuration (seconds) {
//   const secondsMatch = {
//     "minute" : 60, 
//     "hour": 3600 ,
//      "day": 86400,
//      "year": 31536000
//   }

//   var secs = 0
//   var min = 0
//   var hour = 0
//   var day = 0
//   var year = 0

//   if (seconds === 0) {
//     return  "now" 
//   } else if (seconds > secondsMatch["year"]){ 
//     return "Year" 
//   } else if (seconds > secondsMatch["day"]) {
//     return "Day"
//   } else if (seconds > secondsMatch["hour"]) {
//     val = seconds / secondsMatch["hour"]
//     hour = parseInt(val)
//     min =  secondsMatch["minute"]
//     sec = seconds % secondsMatch["minute"]
//     return val

//     min + " minutes and " + sec +" seconds"   

//   } else if (seconds >= secondsMatch["minute"]) {
//     min = parseInt(seconds / secondsMatch["minute"])
//     sec = seconds % secondsMatch["minute"]
//     return min + " minutes and " + sec +" seconds"   
//   } else {
//     var secs = seconds > 1 ? seconds + " seconds" : "1 second"
//     return secs
//   }
// }

// console.log(formatDuration(34200))    // returns "1 minute and 2 seconds"
// // formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// // For the purpose of this Kata, a year is 365 days and a day is 24 hours.


//----Find the first non-consecutive number----//

function firstNonConsecutive (arr) {
  let currentNum = arr[0]
  let odd = null

  arr.find(num => {
    if (odd !== null) {
      odd
    }
    else if (num === currentNum) {
     currentNum++
    } else {
      odd = num
    }  
  })
  return odd
}
//TEST
// console.log(firstNonConsecutive([1,2,3,4,5,6,7,8]))

//Best Practice
// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1]
//     }
//   }
//   return null
// }