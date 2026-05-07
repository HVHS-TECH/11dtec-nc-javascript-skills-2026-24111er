/****************************
T16 Arrays Continued
****************************/
console.log("Running t016_introduction.js")
console.log("Hello World!")

const Output = document.getElementById("spaceForJavaScriptOutput");
const twoOutput = document.getElementById("spaceForJavaScriptOutputTwo")
var shoppingArray = [];
var l;
var i;
// Variables

/*
Main Code
*/


/*
Functions
*/

function getFormInputS () {
    let ShoppingValue = document.getElementById("Shoppingfield").value;
    shoppingArray.push(ShoppingValue)
    Output.innerHTML += "<p>You have added " + ShoppingValue + " to your list</p>";
    twoOutput.innerHTML = "";
   
}

function getFormInputL () {
    twoOutput.innerHTML = "<ul>These are the items on your shopping list:</ul>";
    for (l = 0; l<shoppingArray.length; l++) {
        twoOutput.innerHTML += "<li>" + shoppingArray[l] + "</li>"
    }


   
}

function getFormInputCo () {
    let countValue = document.getElementById("Countfield").value;
    let choiceCount = Number(countValue);

    for (i= choiceCount; i>=2; i--) {
        Output.innerHTML += "<p>There are " + i +  " bottles of milk on the wall</p>";
        console.log (i)
    }

    i = 1;
    Output.innerHTML += "<p>There is 1 bottle of milk on the wall</p>";


   
}