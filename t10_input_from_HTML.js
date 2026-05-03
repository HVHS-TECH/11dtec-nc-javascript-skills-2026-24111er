/****************************
T10 Input From HTML
***********************/
console.log("Running t10.js")
console.log("Hello World!")

// Variables
const Output = document.getElementById("spaceForJavaScriptOutput");


var userMoney = 2;
var userAge = 14;
var currentYear = 2026;
var newMoney;


/*
Main Code
*/
welcome()
displayProduct("Chocolate bar", 4 )
displayProduct("Chips", 3 )
displayProduct("Drink", "2.50" )


/*
Functions
*/
function getFormInput () {
    let username = document.getElementById("Namefield").value;
    Output.innerHTML += "<p>Hi " + username + "</p>";
    console.log(username)
}

function start () {
    Output.innerHTML += "<h2>Added by Javascript</h2>";
    Output.innerHTML += "<p>As of " + currentYear + " you are " + userAge + " years old</p>";
    Output.innerHTML += "<p>You were born in " + (currentYear - userAge) + "</p>";
    Output.innerHTML += "<p>In 10 years you will be " + (userAge + 10) + "</p>";
    Output.innerHTML += "<p>You have " + userMoney + " dollars</p>";
    Output.innerHTML += "<p>You spend half of your money and now you have " + (newMoney = (userMoney / 2)) + " dollar</p>";
    Output.innerHTML += "<p>Then you get $3, now you have " + (newMoney + 3) + " dollars</p>";

}

function welcome() {
    Output.innerHTML = "<h1>Welcome to the Shop</h1>";
    console.log("h1")
}

function displayProduct(_name, _price) {
    Output.innerHTML += "<p>" +_name+ ": $" +_price+ "</p>";

}