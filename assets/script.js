// Assignment code here
// Input variables 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var password = [];
var choices = [];
var ps;
// Start variables for user criteria 
// Letter characters
Letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Numeric characters
number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Special characters 
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ":", "<", ">", "/", "?"];
// End variables for user criteria

// Make letters uppercase
var toUpper = function (x) {
  return x.toUpperCase()
}

// Variable for uppercase letters
var CapLetter = Letter.map(toUpper)
// Get references to the #generate element
var get = document.querySelector("#generate");

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
  if (confirmNumber) {
    choices = choices.concat(number)
  }
  if (confirmCharacter) {
    choices = choices.concat(character)
  }
  if (confirmLowercase) {
    choices = choices.concat(Letter)
  }
  if (confirmUppercase) {
    choices = choices.concat(CapLetter)
  }
  for (var i = 0; i < enter; i++) {
    var choice = Math.floor(Math.random() * choices.length)
    console.log(choice);
    var pickChoices = choices[choice];
    console.log(pickChoices);
    password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  password.join("")
  console.log(ps)
  UserInput(password.join(""))
  return ps;
}
// This puts the password value into the textbox
function UserInput(ps) {
  document.getElementById("password").textContent = ps
}
get.addEventListener("click", function () {
  ps = generatePassword()
  document.getElementById("password").placeholder = ps
})