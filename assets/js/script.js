// Function that asks the user for password length and generates the password.
function generatePassword() {
  var newArray = [];

  var lengthInput = window.prompt("Please input the desired length of the password. It must be between 8 and 128 characters long.");
  if(lengthInput === null) {
    window.alert("Have a great day!")
    return;
  }
  var passwordLength = parseInt(lengthInput);

  if (isNaN(passwordLength)) {
    window.alert("Please enter a number.")
    return generatePassword();
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters!")
    return generatePassword();
  }

  var newPassword = [];
  newArray = criteriaPrompt();
  for(var i = 0; i < passwordLength; i++) {
    var randomIndex = randomNumber(0, newArray.length - 1);
    var randomString = newArray[randomIndex];
    console.log(randomString);
    newPassword.push(randomString);
  }
  return newPassword.join('');
}

/* Function that prompts the user for what criteria they would like their password to have.
This function is passed into generatePassword(). */
function criteriaPrompt() {
  var upperCasePrompt = window.confirm("Would you like to include uppercase letters?");
  var lowerCasePrompt = window.confirm("Would you like to include lowercase letters?");
  var numberPrompt = window.confirm("Would you like to include numbers?");
  var specialPrompt = window.confirm("Would you like to include special characters?");

  if (upperCasePrompt === false && lowerCasePrompt === false && numberPrompt === false && specialPrompt === false) {
    window.alert("You must select at least one criteria to generate a password.");
    return criteriaPrompt();
  }

  var criteriaArray = [];

  if(upperCasePrompt) {
    criteriaArray = criteriaArray.concat(getUpper());
  }
  if(lowerCasePrompt) {
    criteriaArray = criteriaArray.concat(getLower());
  }
  if(numberPrompt) {
    criteriaArray = criteriaArray.concat(getNumber());
  }
  if(specialPrompt) {
    criteriaArray = criteriaArray.concat(getSymbols());
  }
  return criteriaArray;
}

/* The next four functions convert the characters that will be used
to create the password into an array. */
function getLower() {
	var letters = 'abcdefghijklmnopqrstuvwxyz';
  var lettersArray = letters.split('');
  return lettersArray;
}

function getUpper() {
	var letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  var lettersArray = letters.split('');
  return lettersArray;
}

function getNumber() {
	var numbers = '0123456789';
  var numberArray = numbers.split('');
  return numberArray;
}

function getSymbols() {
  var characters = '~`!@#$%^&*()-_=+[{]}|;:<,>./?';
  var characterArray = characters.split('');
  return characterArray;
}

// Generates a random number that is in the generatePassword() function.
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

// Get references to the #generate element.
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password === undefined) {
    password = "";
  }
  passwordText.value = password;

}

// Event listener for when user clicks "Generate Password".
generateBtn.addEventListener("click", writePassword);
