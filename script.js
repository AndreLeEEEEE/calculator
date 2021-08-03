const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = function(x, y) {
    if (y === 0) {
        alert("Error: Don't divide by 0");
        clearDisplay();
        return;
    }
    return x / y;
}

function operate(currentOperator) {
    if (storedOperator) {
        switch(storedOperator) {
            case "+":
                updateDisplay(add(storedValue, getDisplay()), true);
                break;
            case "-":
                updateDisplay(subtract(storedValue, getDisplay()), true);
                break;
            case "*":
                updateDisplay(multiply(storedValue, getDisplay()), true);
                break;
            case "/":
                updateDisplay(divide(storedValue, getDisplay()), true);
                break;
            default:
                alert("Unreached");
        }
        // Used for expressions with more than one operator
        if (currentOperator !== null) {equalizeValues(currentOperator);}
        // Used when the equal button is clicked
        else {storedOperator = null;}
    }
    // Used on the first operator
    else {equalizeValues(currentOperator);}
    // Ensures that the next number will replace the current display number
    isNumber = false;
}

function pressEqual() {
    // Make sure equal isn't clicked when the number to operator ratio is wrong
    if (storedOperator && isNumber) {
        operate();
    }
}

function pressNumber(numberKey) {
    // If true, build a number, if false, replace the display value first
    isNumber ? updateDisplay(numberKey) : updateDisplay(numberKey, true);
}

function clearDisplay() {
    updateDisplay("", true);
    storedValue = null;
    storedOperator = null;
}

function updateDisplay(displayValue, replaceDisplay = false) {
    if (!replaceDisplay) {
        let tempDisplay = document.querySelector("#display").textContent;
        displayValue = tempDisplay.toString() + displayValue.toString();
    }
    // Allows for a new number to be built after replacement
    isNumber = true;
    // Round to 2 decimal places if there are any
    displayValue = Math.round(displayValue * 100) / 100;
    document.querySelector("#display").textContent = displayValue;
}

function getDisplay() {
    return Number(document.querySelector("#display").textContent);
}

function equalizeValues(currentOperator) {
    storedOperator = currentOperator;
    storedValue = getDisplay();
}

// Will be hoisted to the top on file execution
let storedValue = null;
let storedOperator = null;
let isNumber = true;