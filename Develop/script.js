// Assignment Code
// I worked on this whole assignment with Kyle Jones and Carly Staheli. 
var generateBtn = document.querySelector("#generate");
// Arrays for each data type that the user can include in their password
var specChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}","~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var combined = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//this function generates the value based on the length that they choose
function passwordLength(numAmount) {
//this line is important. It allows the variables chosen in the for loops to be joined together into a string.
   var str = '';
//This first for loop ensures that at least one character of each array that is chosen is included.
   for(var i = 0; i < combined.length; i++){
//We create a variable that is equal to the array that the for loop is currently running on 
    var arr = combined[i];
//We then create the random variable that is equal to the length of the current array. The - 1 ensures there is no undefined value.
    var index = Math.floor(Math.random() * (arr.length-1));
//After that, we add to the str value using the random value of index in the current array.
    str += arr[index];
   }
//This second for loop follows the same logic and just subtracts the number of characters generated in the previous for loop. This part gets us to the requested password length.
    for(var i = 0; i < numAmount - combined.length; i++) {
    var index = Math.floor(Math.random() * (combined.length-1));
    var arr = combined[index]; 
    var value = Math.floor(Math.random() * (arr.length-1));
    str += arr[value];
  }
   console.log(str.length);
//After both these for loops have finished performing, we return the str value which then gets input as the password.
   return str;
}

function generatePassword() {
//This questionairre allows the user to pick what kinds of characters they want their password to include as well as its length.
  var lengthP = Number(prompt("How many characters would you like in your password? It must be between 8 and 128 characters."));

  var lowercaseP = confirm("Would you like lowercase characters?")
//the push modifier causes any array that is true to be part of the combined array. So it becomes an array within an array. 
      if (lowercaseP == true) {
        combined.push(lowercase);
      } 
  
  var uppercaseP = confirm("Would you like UPPERCASE characters?")

      if (uppercaseP == true) {
        combined.push(uppercase);
      }

  var specCharsP = confirm("Would you like special characters?")

      if (specCharsP == true) {
        combined.push(specChars);
      }

  var numbersP = confirm("Would you like numeric characters?")

      if (numbersP == true) {
        combined.push(numbers);
        // console.log(combined);
      } 
//This part calls the function we created above with the parameter of the chosen password length. It is stored into the 'answer' variable and then returned out of this function.
  var answer = passwordLength(lengthP);
  console.log(answer);

    return answer;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
