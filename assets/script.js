// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = ['1' , '2' , '3' , '4' , '5' , '6' ,] 

//Functiion to generate password
function generatePassword(){

    //Prompt user to select a desired password length
    var passwordLength = prompt("How many characters do you want in you password?");
    //Check if passwod in between 8 and 128 characters long 
    var passwordLength = (passwordLength > 8 || passwordLength < 128)     
    //Display alert and loop function until password length is met
    alert("Password must be between 8 and 128 characters long.") ;
    return; 
    }if (passwordLength > 8 || passwordLength < 128);
        console.log("Please select a number");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//start with a function 
//create an array for each characters 
//prompt the user if they want to select a character 
//loop how ever many times they want for their character 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
