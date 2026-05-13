/****************************
T21 The DOM
****************************/
console.log("Running t22.js")
console.log("Hello World!")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const SECOND_OUTPUT = document.getElementById("spaceForJavaScriptOutputTwo");
var shoppingArray = [];
var chocolateLike = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
var l;
var i;
const CURRENT_YEAR = 2026;
var newMoney;
var userDetails = [{

}]
// Variables

/*
Main Code
*/

// welcome()
// displayProduct("Chocolate bar", 4 )
// displayProduct("Chips", 3 )
// displayProduct("Drink", "2.50" )


/*
Functions
*/

function getFormInputShopping () {
    OUTPUT.innerHTML = "";
    SECOND_OUTPUT.innerHTML = "";
    let _shoppingValue = document.getElementById("shoppingField").value;
    shoppingArray.push(_shoppingValue)
    OUTPUT.innerHTML += "<p>You have added " + _shoppingValue + " to your list</p>";
   
}

function getFormInputList () {
    SECOND_OUTPUT.innerHTML = "<ul>These are the items on your shopping list:</ul>";
    for (l = 0; l<shoppingArray.length; l++) {
        SECOND_OUTPUT.innerHTML += "<li>" + shoppingArray[l] + "</li>"
    }


   
}

function getFormInputCountVerses() {
    const COUNT_VALUE = document.getElementById("countField");
    let _verseCount = Number(COUNT_VALUE.value);
    const VERSE_MAX = 99;
    const VERSE_MIN = 1;
    OUTPUT.innerHTML = "";
    SECOND_OUTPUT.innerHTML = "";

    if (COUNT_VALUE.checkValidity() === false) {
        OUTPUT.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
    } else if (_verseCount>VERSE_MAX || _verseCount<VERSE_MIN) {
        OUTPUT.innerHTML = "<b><p>Please enter a number between 1 and 99</p></b>";
    } else {
        for (i = _verseCount; i>=2; i--) {
            OUTPUT.innerHTML += "<p>There are " + i +  " bottles of milk on the wall</p>";
            console.log (i)
        }
        i = 1;
        OUTPUT.innerHTML += "<p>There is 1 bottle of milk on the wall</p>";
    }


   
}




function getFormInput () {
    OUTPUT.innerHTML = "";
    SECOND_OUTPUT.innerHTML = "";
    const NAME = document.getElementById("nameField");
    let _userName = (NAME.value)
    const MIN_LETTERS = 3;
    const AGE = document.getElementById("ageField");
    let _userAge = Number(AGE.value);
    const MONEY = document.getElementById("moneyField");
    let _userMoney = Number(MONEY.value);
    const COST_CHOCOLATE = 4;
    const CHOCOLATE_LIKENESS = document.getElementById("chocolateField");
    let _chocoChoice = Number(CHOCOLATE_LIKENESS.value);
    const MIN_CHOCOLATE = 0;
    const MAX_CHOCOLATE = 3;
    getFormInputName()
    getFormInputAge()
    getFormInputChocolate()
    getFormInputMoney()
    
    userDetails.push({
        Name: _userName,
        Age: _userAge,
        pocketMoney: _userMoney,
        chocolatePreference: _chocoChoice
    })
    console.log(userDetails)

    function getFormInputAge () {
    if (AGE.checkValidity() === false) {
        OUTPUT.innerHTML += "<b><p>Only numbers can be entered into this field</p></b>";
    } else {
        OUTPUT.innerHTML += "<p>As of " + CURRENT_YEAR + " you are " + _userAge + " years old</p>";
        
    }
}
    function getFormInputName () {
        if (isNaN(NAME.value) === false) {
            OUTPUT.innerHTML = "<b><p>Numbers can not be inserted in this area</p></b>";
        
        } else if(_userName.length<MIN_LETTERS) {
            OUTPUT.innerHTML = "<b><p>Please insert a name at least 3 letters long</p></b>";
        
        } else {
            OUTPUT.innerHTML += "<p>Hi " + _userName + "</p>";
            
        
        }
    }

    function getFormInputChocolate () {
        if (CHOCOLATE_LIKENESS.checkValidity() === false) {
            OUTPUT.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
        } else if(_chocoChoice <= MIN_CHOCOLATE || _chocoChoice >= MAX_CHOCOLATE) {
            OUTPUT.innerHTML = "<b><p>Please enter a number between 0 and 3</p></b>";
        } else {
            OUTPUT.innerHTML += chocolateLike[_chocoChoice];
        }
        
    }

    function getFormInputMoney () {
        if (MONEY.checkValidity() === false) {
        OUTPUT.innerHTML = "<b><p>Only numbers can be entered into this field</p></b>";
        } else {
            OUTPUT.innerHTML += "<p>You have " + _userMoney + " dollars</p>";
            
            if (_userMoney>=COST_CHOCOLATE) {
                OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";
                OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar</p>";
            } else if (_userMoney<COST_CHOCOLATE) {
                OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";
                OUTPUT.innerHTML += "<p>Sorry, you CAN'T afford a chocolate bar</p>";
            }
        }

    
    }   

    
}

// function displayProduct(_name, _price) {
//     OUTPUT.innerHTML += "<p>" +_name+ ": $" +_price+ "</p>";

// }

function buttonClicked() {
    nameField = {
        value: 0
    }
    ageField = {
        value: 0
    }
    moneyField = {
        value: 0
    }
    chocolateField = {
        value: 0
    }
    countField = {
        value: 0
    }
    shoppingField = {
        value: 0
    }
}