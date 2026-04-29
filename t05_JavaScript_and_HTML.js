/****************************
T05 Javascript and HTML
***********************/
console.log("Running t0.js")
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

Output.innerHTML += "<h2>Added by Javascript</h2>";
Output.innerHTML += "<p>Hi " + userName + "</p>";
Output.innerHTML += "<p>As of " + currentYear + " you are " + userAge + " years old</p>";
Output.innerHTML += "<p>You were born in " + (currentYear - userAge) + "</p>";
Output.innerHTML += "<p>In 10 years you will be " + (userAge + 10) + "</p>";
Output.innerHTML += "<p>You have " + userMoney + " dollars</p>";
Output.innerHTML += "<p>You spend half of your money and now you have " + (newMoney = (userMoney / 2)) + " dollar</p>";
Output.innerHTML += "<p>Then you get $3, now you have " + (newMoney + 3) + " dollars</p>";
welcome()
// console.log("Hi " + userName)
// console.log("As of " + currentYear + " you are " + userAge + " years old")
// console.log("You were born in", currentYear - userAge)
// console.log("In 10 years you will be", userAge + 10)
// console.log("You have " + userMoney + " dollars")
// console.log("You spend half of your money and now you have", newMoney = (userMoney / 2), "dollar")
// console.log("Then you get $3, now you have", newMoney + 3, "dollars")


/*
Functions
*/

