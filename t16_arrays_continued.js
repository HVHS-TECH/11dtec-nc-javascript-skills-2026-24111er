/****************************
T16 Arrays Continued
****************************/
console.log("Running t016_introduction.js")
console.log("Hello World!")

const Output = document.getElementById("spaceForJavaScriptOutput");
var chocolateLike = [];
var i;
// Variables

/*
Main Code
*/


/*
Functions
*/

function getFormInputS () {
    let countValue = document.getElementById("Countfield").value;
    let choiceCount = Number(countValue);

    for (i= choiceCount; i>=2; i--) {
        Output.innerHTML += "<p>There are " + i +  " bottles of milk on the wall</p>";
        console.log (i)
    }

    i = 1;
    Output.innerHTML += "<p>There is 1 bottle of milk on the wall</p>";


   
}