//character variables
var specialChars = ["!","@","#","$","%","^","&","*"];
var numberChars = ["1","2","3","4","5","6","7","8","9"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","u","v","w","x","y","z"];
var allChars = [specialChars, numberChars, upperCase, lowerCase];

//User Answer Option Arrays
yesNo = ["yes", "no"];
eightto128 = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32 ,33 ,34 ,35 ,36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94 , 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128];


//User Prompt Variables
var passwordValidation = window.prompt("Do you want to create a password Today?")
var passNumb = window.prompt("Do you want numbers in your password?");
var passUpper = window.prompt("Do you want upper case letters?");
var passLower = window.prompt("Do you want lower case letters?")
var passSpecial = window.prompt("Do you want any special characters?");
var passLength = window.prompt("How long would you like the Password to be from 8 to 128 characters?");
// checking arrays for errors
window.console.log(specialChars);
window.console.log(numberChars);
window.console.log(upperCase);
window.console.log(lowerCase);
window.console.log(allChars);

//randomizing password variable
// var randomPassword = {
//     math.floor(math.random(allChars.length) * passLength);

// };
// console.log(randomPassword);

//initial prompts
//prompt for the length of the password from 8-128
//prompt for boolean of lowercase uppercase numeric and special characters
// create variables to hold chars option (special, number Uppercase, Lowercase)




//   var allOptions = array(specialChars, NumberChars, Uppercase, Lowercase);

// // create an empty array to hold users selectedchars
// var userSelection = []

// //on game start prompt users number of characters and hold in a variable "userInput"

// var howMany = prompt("How Many Characters Would like in your Password"); 


// //check the users input and check that they put in a number between 8 & 128




// // write the function that validates users input 

// function validateUserInput () {
// //need to create user input function

// }




// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
// // function writePassword(allOptions) {
// //   var password = generatePassword() {
// //     return: Math,floor(Math.random() * max);
// //   }
// // console.log(writepassword[8])


// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// // }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// function getRandomInt(specialChars) {
//   return Math.floor(Math.random() * max);
// }
// console.log(getRandomInt);