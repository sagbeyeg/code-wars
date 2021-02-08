//----ENCRYPT THIS----//

// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.
// Examples:

const encryptThis = text => {
  let wordArray = []
  
  if (text.length === 1) {
    return `${text.charCodeAt(0)}`
  } else if (text.length === 2) {
    return `${text.charCodeAt(0)}${text[1]}`
  } else if (text.length > 2) {
    text.split(" ").map(word => {
      let split = word.split("")
      // console.log(split)
      let code = `${split[0].charCodeAt(0)}`
      let second = split[1]
      let last = split[split.length-1]
      // console.log(code)
      // console.log(second)
      // console.log(last)
      split[0] = code
      split[1] = last
      split[split.length-1] = second
      // console.log(split)
      wordArray.push(split.join(""))
      // console.log(wordArray)
    })
    return wordArray.join(" ")
  }
}
// console.log(encryptThis("Hello")) // === "72olle"
// encryptThis("good") // === "103doo"
console.log(encryptThis("hello world")) // === "104olle 119drlo"
console.log(encryptThis("A")) // === "65"