//----WHERE MY ANAGRAMS AT?----//
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  newArray = []
  var x = word.split("").sort().join("");
  // console.log(x)
  words.map(word => {
    var y = word.split("").sort().join("")
    // console.log(y)
    x === y ? newArray.push(word) : null
  })
  return newArray
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])