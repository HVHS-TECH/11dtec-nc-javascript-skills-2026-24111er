/****************************
T15 For Loop
****************************/
console.log("Running t015_introduction.js")
console.log("Hello World!")

const Output = document.getElementById("spaceForJavaScriptOutput");
var i;
var are;
var bottles;
// Variables
// This is a single line comment

/*
Main Code
*/


/*
Functions
*/

function getFormInputCo () {
    let countValue = document.getElementById("Countfield").value;
    let choiceCount = Number(countValue);

    for (i= choiceCount; i>=0; i--) {
        Output.innerHTML += "<p>There " + are + i + bottles + " of milk on the wall";
        console.log (i)

        if (i=1) {
            are = "is";
            bottles = "bottle";
        } else {
            are = "are";
            bottles = "bottles"
        }

    }
}