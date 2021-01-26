//----DUBSTEP----//
// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters
// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.
// Examples
// =>  WE ARE THE CHAMPIONS MY FRIEND

const songDecoder = song => {
  return song.replace(/WUB/g, " ").split(" ").filter(obj => obj != "").join(" ")
}
// TEST
// console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))

// BEST PRACTICES
// const songDecoder = song => song.replace(/(WUB)+/g, ' ').trim();