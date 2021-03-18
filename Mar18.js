//----REGEX PASSWORD VALIDATION----//
//You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.


function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).[A-Za-z0-9]{6,}$/.test(password)
}

// Regex Stuff
//^.{6,}$/ -> for 6 or more characters
//^ -> start of sting
//. -> any character except line break
//{6,} -> 6 or more
// $ -> end of string
//(?=...) -> positive lookahead
//+ -> one or more

//Tests
console.log(validate('Password123')) // 'Password123 - Expected true'
console.log(validate('a2.d412')) // 'a2.d412 - Expected false');
console.log(validate('JHD5FJ53')) // 'JHD5FJ53 - Expected false');