// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// First we outline and seperate by groups the pool of the usable characters
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// create funtion to generate password first we designate length 
function generatePassword () {
let passwordLength = prompt('How long would you like your password? (Choose a length from 8 - 64 characters)');

//Converts to numeric value -- If statement checks length to validate it is of acceptable length
passwordLength = parseInt(passwordLength);
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 64 ) {
alert('Please choose a valid length!');
return '';
}

//we use these prompts to ask what to include
let useLowercase = confirm('Include lowercase letters?');
  let useUppercase = confirm('Include uppercase letters?');
  let useNumbers = confirm('Include numbers?');
  let useSpecialCharacters = confirm('Include special characters?');

  //Variable to store value of what pool(s) to use
  let characterSet = '';
  if (useLowercase) {
    characterSet += lowercaseLetters;
  }
  if (useUppercase) {
    characterSet += uppercaseLetters;
  }
  if (useNumbers) {
    characterSet += numbers;
  }
  if (useSpecialCharacters) {
    characterSet += specialCharacters;
  }

  // Checks that at least one character set is selected via the prompts
  if (characterSet === '') {
    alert('Please select at least one character set!');
    return '';
  }

  // Generate password using math functions that are built in based on length of Password
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  // gives password to the textarea on page
  return password;
};