/****************************
T16 Arrays Continued
****************************/
console.log("Running t016_introduction.js")
console.log("Hello World!")

const Output = document.getElementById("spaceForJavaScriptOutput");
const twoOutput = document.getElementById("spaceForJavaScriptOutputTwo")
var shoppingArray = [];
var l;
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