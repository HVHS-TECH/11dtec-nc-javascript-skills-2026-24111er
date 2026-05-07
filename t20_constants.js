/****************************
T20 Constants
****************************/
console.log("Running t20.js")
console.log("Hello World!")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const twoOUTPUT = document.getElementById("spaceForJavaScriptOutputTwo")
var shoppingArray = [];
var l;
var i;
var username;
var userMoney;
var userAge;
var currentYear = 2026;
var newMoney;
// Variables

/*
Main Code
*/

// welcome()
displayProduct("Chocolate bar", 4 )
displayProduct("Chips", 3 )
displayProduct("Drink", "2.50" )


/*
Functions
*/

function getFormInputS () {
    OUTPUT.innerHTML = "";
    twoOUTPUT.innerHTML = "";
    let ShoppingValue = document.getElementById("Shoppingfield").value;
    shoppingArray.push(ShoppingValue)
    OUTPUT.innerHTML += "<p>You have added " + ShoppingValue + " to your list</p>";
   
}

function getFormInputL () {
    twoOUTPUT.innerHTML = "<ul>These are the items on your shopping list:</ul>";
    for (l = 0; l<shoppingArray.length; l++) {
        twoOUTPUT.innerHTML += "<li>" + shoppingArray[l] + "</li>"
    }


   
}

function getFormInputCo () {
    const countValue = document.getElementById("Countfield");
    let choiceCount = Number(countValue.value);
    OUTPUT.innerHTML = "";
    twoOUTPUT.innerHTML = "";

    if (countValue.checkValidity() === false) {
        OUTPUT.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
    } else if (choiceCount>99 || choiceCount<1) {
        OUTPUT.innerHTML = "<b><p>Please enter a number between 1 and 99</p></b>";
    } else {
        for (i = choiceCount; i>=2; i--) {
            OUTPUT.innerHTML += "<p>There are " + i +  " bottles of milk on the wall</p>";
            console.log (i)
        }
        i = 1;
        OUTPUT.innerHTML += "<p>There is 1 bottle of milk on the wall</p>";
    }


   
}




function getFormInputN () {
    OUTPUT.innerHTML = "";
    twoOUTPUT.innerHTML = "";
    const NAME = document.getElementById("Namefield");
    let username = (NAME.value)

    if (isNaN(NAME.value) === false) {
        OUTPUT.innerHTML = "<b><p>Numbers can not be inserted in this area</p></b>";
        
    } else if(username.length<3) {
        OUTPUT.innerHTML = "<b><p>Please insert a name at least 3 letters long</p></b>";
        
    } else {
        OUTPUT.innerHTML += "<p>Hi " + username + "</p>";
        console.log(username)
    }

}

function getFormInputA () {
    OUTPUT.innerHTML = "";
    twoOUTPUT.innerHTML = "";
    const AGE = document.getElementById("Agefield");
    let userAge = Number(AGE.value);

    if (AGE.checkValidity() === false) {
        OUTPUT.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
    } else {
        OUTPUT.innerHTML += "<p>As of " + currentYear + " you are " + userAge + " years old</p>";
        console.log(userAge)
    }

}

function getFormInputM () {
    OUTPUT.innerHTML = "";
    twoOUTPUT.innerHTML = "";
    const MONEY = document.getElementById("Moneyfield");
    let userMoney = Number(MONEY.value);

    if (MONEY.checkValidity() === false) {
        OUTPUT.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
    } else {
        OUTPUT.innerHTML += "<p>You have " + userMoney + " dollars</p>";
        console.log(userMoney)
        if (userMoney>=4) {
            OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";
            OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar</p>";
        } else if (userMoney<4) {
            OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";
            OUTPUT.innerHTML += "<p>Sorry, you CAN'T afford a chocolate bar</p>";
        }
    }

    
}

function start () {
    OUTPUT.innerHTML = "";
    twoOUTPUT.innerHTML = "";
    OUTPUT.innerHTML += "<h2>Added by Javascript</h2>";
    OUTPUT.innerHTML += "<p>As of " + currentYear + " you are " + userAge + " years old</p>";
    OUTPUT.innerHTML += "<p>You were born in " + (currentYear - userAge) + "</p>";
    OUTPUT.innerHTML += "<p>In 10 years you will be " + (userAge + 10) + "</p>";
    OUTPUT.innerHTML += "<p>You have " + userMoney + " dollars</p>";
    OUTPUT.innerHTML += "<p>You spend half of your money and now you have " + (newMoney = (userMoney / 2)) + " dollar</p>";
    OUTPUT.innerHTML += "<p>Then you get $3, now you have " + (newMoney + 3) + " dollars</p>";

}

// function welcome() {
//     OUTPUT.innerHTML = "<h1>Welcome to the Shop</h1>";
//     console.log("h1")
// }

function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<p>" +_name+ ": $" +_price+ "</p>";

}