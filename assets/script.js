// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10'] ;
var lowerCaseLetters = ['a' , 'b' , 'c' , 'd' , 'e' , 'f', 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'];
var upperCaseLetters = ['A' , 'B' , 'C' , 'D' , 'E' , 'F', 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z'];
var specialCharacters = [' ' , '!' , '#' , '$' , '%' , '&' , '*' , '(' , ')' , '+' , ',' , '-' , '?' , '.' , '/' , '[' , ']' , '@' , '~'];

function generatePassword(){

var userChoice = confirm("Use numbers?");
var userChoice = confirm("Use upper case letter?");
var userChoice = confirm("Use lower case letter?");
var userChoice = confirm("Use special characters?");

var password = [];

var finalPassword = [];
}

//Functiion to generate password
function generatePassword(){
  
  var userChoice = prompt ("Please enter how many characters you would like in a your password.") ;
  generatePassword();
  if (!userChoice < 8 || userChoice > 128){
    console.Log("Password must be 8 to 128 characters long.");
    alert("Password must be 8 to 128 characters long.");
    return; 
  }

  if (userChoice > 8 || userChoice < 128){
    console.Log("Please answer yes or no to the following questions!");
      confirm("Use numbers?");
      confirm("Use upper case letter?");
      confirm("Use lower case letter?");
      confirm("Use special characters?");
    generatePassword();
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
