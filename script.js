// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//////////////////////////////////////


// Declare all arrays and variables.
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "#", "$", "%", "&", "?", "/", "@", "*", "(", ")", "<", ">"];
var passwordComp = [];
var passwordLength = 0;
var password = "";


// Ask user to select password length between 8 - 128 characters.
function getLength() {
  var inputLength = prompt("How many characters would you like your password to be? (Choose between 8 - 128.)");
  if (inputLength < 8 || inputLength > 128) {
      alert("You must enter a number between 8 and 128");
  } else {
      passwordLength = inputLength;
  }
}