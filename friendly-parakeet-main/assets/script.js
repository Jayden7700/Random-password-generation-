// Assignment code here
// Input variables 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Start variables for user criteria 
// Letter characters
Letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Numeric characters
number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Special characters 
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", ",", "<", ".", ">", "/", "?"];
// End variables for user criteria

// Make letters uppercase
var toUpper = function (x) {
  return x.toUpperCase()
}

// Variable for uppercase letters
CapLetter = Letter.map(toUpper)
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword()
  document.getElementById("password").placeholder = ps
})
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
