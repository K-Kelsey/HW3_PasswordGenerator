/*--------Variable Assignment Codes----------*/
var generateBtn = document.querySelector("#generate");
var displayText = document.querySelector("#password");


console.log(window);

// Write password to the #password input

function writePassword() {
    var password = "";
    var pass_placeholder = '';
    var lowerValue = "abcdefghijklmnopqrstuvwxyz";
    var upperValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var charLimit = ''
    var charLimits = prompt("Please choose a character limit between 8 and 128.", );

    if (charLimits != null) {
        charLimit += charLimits
    }

    if ((charLimit <= 7) || (charLimit >= 129)) {
        alert("input invalid")
    } else {

        // Ask about lower case
        var incLowerCase = confirm("Would you like to include lower case letters in your password?");
        if (incLowerCase) {
            password += lowerValue;
        }
        // Ask about upper case    
        var incUpperCase = confirm("Would you like to include upper case letters in your password?");
        if (incUpperCase) {
            password += upperValue;
        }
        // Ask about numbers
        var incNumbers = confirm("Would you like to include numbers in your password?");
        if (incNumbers) {
            password += numbers;
        }
        // Ask about symbols
        var incSymbols = confirm("Would you like to include symbols in your password?");
        if (incSymbols) {
            password += symbols;
        }
        // Chooses a random index from the available character array and stores it in the password string.
        for (var i = 0; i < charLimit; i++) {
            pass_placeholder += password.charAt(Math.floor(Math.random() * pass_placeholder.length));
        }
        return pass_placeholder
    }
}

function eventListener() {
    // Add event listener to generate button
    document.getElementById("generate").addEventListener("click", function() {

        pass = writePassword()
        document.getElementById("password").placeholder = pass
    });
}

eventListener()




//----------original layout to get password generated-----------------
// function writePassword() {
//     var password  = '';
//     value   = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=+()!@#$%^&*.,/?;:'"
//     length = 12

//         // if (8 > l > 120)
//         //     console.log("Please input a length between 8 and 120.")
//         // continue
//     for (var i = 0; i < length; i++) {
//         password += value.charAt(Math.floor(Math.random() * value.length));
//     }
//     return password
// }

