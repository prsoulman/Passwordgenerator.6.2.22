//document.querySelector("#generate").addEventListener("click", writePassword);

//character variables
var specialChars = ["!","@","#","$","%","^","&","*"];
var numberChars = ["1","2","3","4","5","6","7","8","9"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","u","v","w","x","y","z"];
//User Answer Option Arrays
//yesNo = ["yes", "no"];
//eightto128 = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32 ,33 ,34 ,35 ,36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94 , 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128];


function generatePassword() {

//User Prompt Variables
var passwordValidation = confirm("Do you want to create a password Today?");
// var passNumb = confirm("Do you want numbers in your password?");
// var passUpper = confirm("Do you want upper case letters?");
// var passLower = confirm("Do you want lower case letters?");
// var passSpecial = confirm("Do you want any special characters?");
//var passLength = window.prompt("How long would you like the Password to be from 8 to 128 characters?");
//checking arrays for errors
// window.console.log(specialChars);
// window.console.log(numberChars);
// window.console.log(upperCase);
// window.console.log(lowerCase);
// window.console.log(allChars);


var passLength = window.prompt("How long would you like the Password to be from 8 to 128 characters?");
if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert ("I said...8 to 128 characters!");
    }
    console.log(passLength);
//Empty array to put the value of Character Choices.

var characterChoice = [];

if(confirm("would you like numbers")) {
    characterChoice = characterChoice.concat (numberChars);
}
if(confirm("would you like special characters")) {
    characterChoice = characterChoice.concat (specialChars);
}
if(confirm("would you lower case letters")) {
    characterChoice = characterChoice.concat (lowerCase);
}
if(confirm("would you upper case letters")) {
    characterChoice = characterChoice.concat (upperCase);
}
if(characterChoice === 0 ) {
    alert("please select at least one character type")
    return;
}
//Password generator using Boolean values from above
var randomPass = "";
 for (var i = 0; i < passLength; i++) {
     var index = Math.floor(Math.random()*characterChoice.length);
     var char = characterChoice[index];
     randomPass += char;
 }
    //make the randomPass variable in the output area #password on the HTML
//     var passwordText = document.querySelector("#password");
//     document.replace(passwordText, randomPass);
// passwordText.value = password, randomPass;
return randomPass;
}

//contenteditable="false"

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




// Assignment Code


// Write password to the #password input
// // function writePassword(allOptions) {
// //   var password = generatePassword() {
// //     return: Math,floor(Math.random() * max);
// //   }
// // console.log(writepassword[8])




// // }

// Addeventlistener to generate button


//starter code!

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);