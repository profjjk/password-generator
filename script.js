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

/////////////////////////////////////////////////


// CREATE VARIABLES:
  // password;
  // 

// CREATE ARRAYS:
  // PREPARED LISTS:
    // Create separate arrays like below, or put everything in one mixed array.
    // numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    // specialChar = ["!", "#", "$", "%", "&"];
  // GENERATED LISTS:
    // A list to receive selected numbers, letters, and special characters that will make up the new password.
      // passwordCharacters = [];
    // A copy of the passwordCharacters list, but scrambled.
      //passwordScrambled = [];

// CREATE FUNCTIONS:
  // 



// Function to pick a random number between 1 and 10:
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
// console.log(getRandomNumber());

// The Fisher Yates Method of randomizing an array (found on w3schools.com):
  // Step 1: Declare an array.
  var listName = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  // Step 2: Create a for loop that runs as many iterations as there are items in the list.
  for (i = listName.length -1; i > 0; i--) {
    // Step 3: Generate a random number within the confines of the list's length. Store that number in a temporary variable (randomNum).
    randomNum = Math.floor(Math.random() * i);
    // Step 4: Pop an item from the end of the array (the loop is combing through the list in reverse order) and store it in a temporary variable (listItem).
    listItem = listName[i];
    // Step 5: Use the random number generated in Step 3 to determine a new index position somewhere in the list.
    listName[i] = listName[randomNum];
    // Step 6: Place the popped item from Step 4 into its new index position as determined in Step 5.
    listName[randomNum] = listItem;
    // Step 7: Repeat until all list items have new index positions.
  }
  console.log(listName);