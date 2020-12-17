// DECLARE VARIABLES & ARRAYS
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "#", "$", "%", "&", "?", "/", "@", "*", "(", ")", "<", ">"];
// This array's composition depends on the user's character selection.
var passwordComp = [];
// Value of this variable determined by user.
var passwordLength = 0;
var password = "";
var lengthCheck = true;
var compCheck = true;
var lowerInput; var upperInput; var numberInput; var characterInput;


// GET PASSWORD LENGTH
function getLength() {
  // Prompt user to select password length.
  var inputLength = prompt("How many characters would you like your password to be? (Choose between 8 - 128.)");
  passwordLength = inputLength;
}

// GET PASSWORD COMPOSITION DETAILS
function getComposition() {
  // Confirm with user if lowercase letters are desired in password.
  lowerInput = confirm("Would you like to include lowercase letters?");
  if (lowerInput === true) {
    passwordComp = passwordComp.concat(alphaLower);
  }
  // Confirm with user if uppercase letters are desired in password.
  upperInput = confirm("Would you like to include uppercase letters?");
  if (upperInput === true) {
    passwordComp = passwordComp.concat(alphaUpper);
  }
  // Confirm with user if numbers are desired in password.
  numberInput = confirm("Would you like to include numbers?");
  if (numberInput === true) {
    passwordComp = passwordComp.concat(numbers);
  }
  // Confirm with user if special characters are desired in password.
  characterInput = confirm("Would you like to include special characters?");
  if (characterInput === true) {
    passwordComp = passwordComp.concat(specChar);
  }
}

// CREATE RANDOMIZED PASSWORD
function getPassword() {
  // Run loop until desired password length is reached.
  for (var i = 1; i <= passwordLength; i++) {
    // Pick random element from list and add to password string.
    password += passwordComp[Math.floor(Math.random() * passwordComp.length)];
  }
}

// ASSIGNMENT CODE
var generateBtn = document.querySelector("#generate");

// EXECUTE FUNCTIONS, VALIDATIONS, AND WRITE PASSWORD TO #PASSWORD INPUT
function writePassword() {
  password = "";
  getLength();
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must enter a number between 8 and 128");
    lengthCheck = false;
  } else {
    getComposition();
  }
  if (characterInput === false && numberInput === false && upperInput === false && lowerInput === false) {
    alert("You must choose at least one of the options.")
    compCheck = false;
  } else {
    getPassword();
  } 
  if (lengthCheck === false || compCheck === false) {
    alert("Invalid password options chosen. Try again.")
  } else {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// ADD EVENT LISTENER TO GENERATE BUTTON
generateBtn.addEventListener("click", writePassword);


/////// PROBLEMS ///////

// 1 - Smaller passwords are not guaranteed to include all selected character types.



/////// DRAFT CODE ///////

