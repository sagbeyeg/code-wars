//----ARRAY.DIFF----//
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

function arrayDiff(a, b) {
  newArray = a
  b.map(num => {
    for(i = 0; i < a.length; i++) {
      // console.log(i, a[i], b.find(num => num))
      if (a[i] === num) {
        newArray.splice(i, 1);
        i--;
      }
    }
  })
  return newArray
}
//TEST
console.log(arrayDiff([1,2,2,2,3],[])) // == [1,3]