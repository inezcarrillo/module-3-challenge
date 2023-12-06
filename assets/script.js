// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = [passwordLength<8 || passwordLength<128-characters];
var characterTypes = ['upperCase' , 'lowerCase' , 'number' , 'specialCharacter']

//Functiion to generate password
function generatePassword(){
//promote user to create a password 
    var userChoice = prompt("Please create a new password!");

//Check to see if password meets lenght requirements
if (passwordLength<8 || passwordLength>128-characters(userChoice)){
    alert("Password meets length requirements");
}else if (userChoice (passwordLength<8 ||passwordLength>128));
    alert("Please select a new password!");
    return;
}

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
