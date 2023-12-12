// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10'] ;
var lowerCaseLetters = ['a' , 'b' , 'c' , 'd' , 'e' , 'f', 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'];
var upperCaseLetters = ['A' , 'B' , 'C' , 'D' , 'E' , 'F', 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z'];
var specialCharacters = [' ' , '!' , '#' , '$' , '%' , '&' , '*' , '(' , ')' , '+' , ',' , '-' , '?' , '.' , '/' , '[' , ']' , '@' , '~'];

function generatePassword(){
  
  var finalCharacters = [];

var passwordLength = "Please enter how many characters you would like in a your password.";
var userChoiceNumbers = confirm("Use numbers?");
var userChoiceUpperLetter = confirm("Use upper case letter?");
var userChoiceLowerLetter = confirm("Use lower case letter?");
var userChoiceSpecialChars = confirm("Use special characters?");

var finalPassword = [];


var userChoice = prompt ("Please enter how many characters you would like in a your password.") ;
  generatePassword();
  if (!passwordLength || passwordLength < 8 || passwordLength > 128){
    console.Log("Password must be 8 to 128 characters long.");
    alert("Password must be 8 to 128 characters long.");
    generatePassword();
    return false;

  }

}


//Functiion to generate password
function generatePassword(){

  var userChoice = prompt ("Please enter how many characters you would like in a your password.") ;
      confirm("Use numbers?");
      confirm("Use upper case letter?");
      confirm("Use lower case letter?");
      confirm("Use special characters?");
    generatePassword();
  
  var userChoice = prompt ("Please enter how many characters you would like in a your password.") ;
  if (!passwordLength || passwordLength < 8 || passwordLength > 128){
    alert("Password must be 8 to 128 characters long.");
    return false;
  }

  if (userChoiceLowerLetter) {
    finalCharacters = finalCharacters.concat(lowerCaseLetters);
  }

  if (userChoiceUpperLetter) {
    finalCharacters = finalCharacters.concat(upperCaseLetters);
  }

  if (userChoiceNumbers) {
    finalCharacters = finalCharacters.concat(number);
  }

  if (userChoiceSpecialChars) {
    finalCharacters = finalCharacters.concat(specialCharacters);
  }
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * finalCharacters.length);
    finalPassword.push(finalCharacters[randomIndex]);
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password){

  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//start with a function 
//create an array for each characters 
//prompt the user if they want to select a character 
//loop how ever many times they want for their character 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
