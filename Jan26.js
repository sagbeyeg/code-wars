//----ROT13----//
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
const alpha = {
  "A": "N",
  "B": "O",
  "C": "P",
  "D": "Q",
  "E": "R",
  "F": "S",
  "G": "T",
  "H": "U",
  "I": "V",
  "J": "W",
  "K": "X",
  "L": "Y",
  "M": "Z",
  "N": "A",
  "O": "B",
  "P": "C",
  "Q": "D",
  "R": "E",
  "S": "F",
  "T": "G",
  "U": "H",
  "V": "I",
  "W": "J",
  "X": "K",
  "Y": "L",
  "Z": "M",
  "a": "n",
  "b": "o",
  "c": "p",
  "d": "q",
  "e": "r",
  "f": "s",
  "g": "t",
  "h": "u",
  "i": "v",
  "j": "w",
  "k": "x",
  "l": "y",
  "m": "z",
  "n": "a",
  "o": "b",
  "p": "c",
  "q": "d",
  "r": "e",
  "s": "f",
  "t": "g",
  "u": "h",
  "v": "i",
  "w": "j",
  "x": "k",
  "y": "l",
  "z": "m"
}
const rot13 = message => {
  var coded = []
  message.split("").map(letter => alpha[letter] ? coded.push(alpha[letter]) : coded.push(letter))
  return coded.join("")
}
//TEST
console.log(rot13("Ruby is cool!")) //should return Ehol vf pbby!

// BEST PRACTICES
// function rot13(message) {
//   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }