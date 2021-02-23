//----THE DEAF RATS OF HAMELIN----//
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town. But some of the rats are deaf and are going the wrong way!

// How many deaf rats are there?
// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right

const countDeafRats = town => {
  let deaf = 0
  let split = town.split("P")
  console.log("split:", split)
  return deaf
}

// Example
console.log(countDeafRats("~O~O~O~O P")) // 0
// ex1 ~O~O~O~O P has 0 deaf rats
console.log(countDeafRats("P O~ O~ ~O O~")) // 1
// ex2 P O~ O~ ~O O~ has 1 deaf rat
console.log(countDeafRats("~O~O~O~OP~O~OO~")) // 2
// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats