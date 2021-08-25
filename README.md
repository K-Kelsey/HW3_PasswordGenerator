#Functioning Random Password Generator! HW3
---

This is my random password generator that I completed for week 3's homework.

Here is how to navigate it:
>When the generate button is clicked, you will be prompted with a window asking how many characters you would like in your generated password.
>Following that prompt will be a series of questions regarding what parameters you would like tied to your generated password.
>You can confirm these options by either choosing "OK" for "Yes" or you can choose "Cancel" for "No"
>After the series of prompts are complete, a random password with the given parameters will be generated in the textarea.
>Enjoy!

Here is a sample of how the website will look:

![Homepage](![2021-08-24](https://user-images.githubusercontent.com/87803018/130725017-018f053f-2ba2-4aca-8bc4-ce5fa66faa02.png))
![Homepage](2021-08-24)

##Lessons learned from the assignment.
---

>Oh man...
this was a fairly brain numbing project at times. logic gets tangled, variables got misplaced. I had to scratch the project twice because I would get too lost in traversing the fiasco that I had regurjetated into vsCode. After about 9+hrs spent on YouTube it still was a frustrating wall to get over but eventually I was able to finally get it to function the way I wanted it to.

>I now humbly remind myself to ADD NOTES as the code progesses and becomes lengrthy, I truly see the value in comment sections to help navigate the code when tackling larger beast outside of your comfortability zone

### _Sources that helped me create this markdown._
---

*[Mike Dane](https://www.youtube.com/channel/UCvmINlrza7JHB1zkIOuXEbw) from YouTube.

*[W3Schools](https://www.w3schools.com/cssref/pr_class_position.asp)

*[TechnicalCafe](https://www.youtube.com/watch?v=9sT03jEwcaw&t=1006s) from YouTube.

*[StackOverflow](https://stackoverflow.com/questions/42603033/uncaught-typeerror-cannot-set-property-textcontent-of-null)

*[FreeCodeCamp](https://forum.freecodecamp.org/)

>Getting the math down to create the first draft of the random password generator took some time to understand but eventually after fiddling with it for enough time, the function itself began to make a lot more sense as far as how property values are stored when not entered manually.

```js
function writePassword() {
    var password  = '';
    value   = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=+()!@#$%^&*.,/?;:'"
    length = 12

        // if (8 > l > 120)
        //     console.log("Please input a length between 8 and 120.")
        // continue
    for (var i = 0; i < length; i++) {
        password += value.charAt(Math.floor(Math.random() * value.length));
    }
    return password
}

```


>After the math was established, I was ready to set that aside and start tackling beast which caused me the biggest migraine ever but boy was it satifying to get it right.

```js
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
```
>Messing with event listeners really gave me a better idea of how interactive features work.

```js
function eventListener() {
    // Add event listener to generate button
    document.getElementById("generate").addEventListener("click", function() {

        pass = writePassword()
        document.getElementById("password").placeholder = pass
    });
}

eventListener()
```
>All and all this project was very entertaining to test how much my brain can hold before losing my sanity. Just kidding. It was a very rewarding project with many many lessons gained from it. I would not say that I would be comfortable by any means pertaining to the logic structure, but I am much further along understanding the language than I was last week.
