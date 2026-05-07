/****************************
T16 Arrays Continued
****************************/
console.log("Running t016_introduction.js")
console.log("Hello World!")

const Output = document.getElementById("spaceForJavaScriptOutput");
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


   
}

function getFormInputL () {
    Output.innerHTML = "<ul>Shopping List:</ul>";
    for (l = 0; l<shoppingArray.length; l++) {
        Output.innerHTML += "<li>" + shoppingArray[l] + "</li>"
    }


   
}