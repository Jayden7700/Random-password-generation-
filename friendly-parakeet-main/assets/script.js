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
var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword()
  document.getElementById("password").placeholder = ps
})

// Generate password function
function generatePassword() {
  enter = parseInt(prompt("What would you like the length of your password to be? Choose between 8 to 128 characters."))
  // Validation check 
  if (!enter) {
    alert("You must input a value!");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 to 128 characters!"))

    // Start input prompts
  } else {
    confirmCharacter = confirm("Do you want special characters in your password?")
    confirmLowercase = confirm("Do you want Lowercase letters in your password?")
    confirmNumber = confirm("Do you want numbers in your password?")
    confirmUppercase = confirm("Do you want Uppercase letters in your password?")
  }

  // Statement for if user doesn't pick criteria 
  if (!confirmUppercase && !confirmCharacter && !confirmLowercase && !confirmNumber) {
    alert("You must enter a criteria into all criteria options for your password!")
  }

  // One criteria selected 
  else if (confirmNumber) {
    choices = number
  }
  else if (confirmCharacter) {
    choices = character
  }
  else if (confirmLowercase) {
    choices = Letter
  }
  else if (confirmUppercase) {
    choices = space.concat(CapLetter)
  }
  // Two criteria selected 
  else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2)

  } else if (confirmNumber && confirmUppercase) {
    choices = alpha.concat(alpha2)

  } else if (confirmCharacter && confirmUppercase) {
    choices = alpha.concat(alpha2)

  } else if (confirmLowercase && confirmNumber) {
    choices = alpha.contact(number)

  } else if (confirmCharacter && confirmNumber) {
    choices = alpha.contact(number)

  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha)
  }
  // Three criteria selected
  else if (confirmUppercase && confirmNumber && confirmCharacter) {
    choices = character.concat(number, alpha2)
  }



}
