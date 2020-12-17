// DECLARE VARIABLES & ARRAYS
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "#", "$", "%", "&", "?", "/", "@", "*", "(", ")", "<", ">"];
var passwordComp = [];
var passwordLength = 0;
var password = "";


// GET PASSWORD LENGTH
function getLength() {
  var inputLength = prompt("How many characters would you like your password to be? (Choose between 8 - 128.)");
  if (inputLength < 8 || inputLength > 128) {
      alert("You must enter a number between 8 and 128");
  } else {
      passwordLength = inputLength;
  }
}

// GET PASSWORD COMPOSITION DETAILS
function getComposition() {
  var lowerInput = confirm("Would you like to include lowercase letters?");
  if (lowerInput === true) {
    passwordComp = passwordComp.concat(alphaLower);
  }
  var upperInput = confirm("Would you like to include uppercase letters?");
  if (upperInput === true) {
    passwordComp = passwordComp.concat(alphaUpper);
  }
  var numberInput = confirm("Would you like to include numbers?");
  if (numberInput === true) {
    passwordComp = passwordComp.concat(numbers);
  }
  var characterInput = confirm("Would you like to include special characters?");
  if (characterInput === true) {
    passwordComp = passwordComp.concat(specChar);
  }
  if (characterInput === false && numberInput === false && upperInput === false && lowerInput === false)
    alert("You must choose at least one of the options.")
}

// CREATE RANDOMIZED PASSWORD
function getPassword() {
  // Loop
  for (var i = 0; i <= passwordLength; i++) {
  password += passwordComp[Math.floor(Math.random() * passwordComp.length)];
  }
}

// RUN FUNCTIONS
getLength();
getComposition();
getPassword();

// ASSIGNMENT CODE
var generateBtn = document.querySelector("#generate");

// WRITE PASSWORD TO #PASSWORD INPUT
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// ADD EVENT LISTENER TO GENERATE BUTTON
generateBtn.addEventListener("click", writePassword);