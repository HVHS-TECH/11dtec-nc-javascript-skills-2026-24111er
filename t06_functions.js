/****************************
T06 Functions
***********************/
console.log("Running t06.js")
console.log("Hello World!")

// Variables
const Output = document.getElementById("spaceForJavaScriptOutput");

var userMoney = 2;
var userAge = 14;
var userName = "Emme";
var currentYear = 2026;
var newMoney;


/*
Main Code
*/
welcome()
Output.innerHTML += "<h2>Added by Javascript</h2>";
Output.innerHTML += "<p>Hi " + userName + "</p>";
Output.innerHTML += "<p>As of " + currentYear + " you are " + userAge + " years old</p>";
Output.innerHTML += "<p>You were born in " + (currentYear - userAge) + "</p>";
Output.innerHTML += "<p>In 10 years you will be " + (userAge + 10) + "</p>";
Output.innerHTML += "<p>You have " + userMoney + " dollars</p>";
Output.innerHTML += "<p>You spend half of your money and now you have " + (newMoney = (userMoney / 2)) + " dollar</p>";
Output.innerHTML += "<p>Then you get $3, now you have " + (newMoney + 3) + " dollars</p>";



/*
Functions
*/


function welcome() {
    Output.innerHTML = "<h1>Welcome to the Shop</h1>";
    console.log("h1")
}