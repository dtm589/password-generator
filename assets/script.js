// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  let characterSet = "";
  let password = "";

  //Promt user for password length
  let length = prompt("How many characters would you like your password to be?");

  // Check if the user entered a valid password legnth
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }

  // Check if the user input a number
  if (isNaN(length)) {
    alert("Password length must be a valid number.");
    return;
  }

  // Ask user what characters to include
  let lowercase = confirm("Would you like to include lowercase letters?");
  let uppercase = confirm("would you like to include uppercase letters?");
  let numbers = confirm("Would you like to include numbers?");
  let symbols = confirm("Would you like to include special characters?");

  // Check that at least one criteria was picked
  if (!lowercase && !uppercase && !numbers && !symbols) {
    alert("You must select at least one password criteria.");
  }

  // Add in characters based on criteria chosen
  if (lowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numbers) {
    characterSet += "0123456789";
  }

  if (symbols) {
    characterSet += "!@#$%^&*()_+-=[~`]{};':<>?|";
  }

  for (i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);