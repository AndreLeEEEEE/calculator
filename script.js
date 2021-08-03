const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

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
        if (currentOperator !== null) {equalizeValues(currentOperator);}
        else {storedOperator = null;}
    }
    else {equalizeValues(currentOperator);}
    isNumber = false;
}

function pressEqual() {
    if (storedOperator && isNumber) {
        operate();
    }
}

function pressNumber(numberKey) {
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
    isNumber = true;
    document.querySelector("#display").textContent = displayValue;
}

function getDisplay() {
    return Number(document.querySelector("#display").textContent);
}

function equalizeValues(currentOperator) {
    storedOperator = currentOperator;
    storedValue = getDisplay();
}

let storedValue = null;
let storedOperator = null;
let isNumber = true;

/*
Get number, put number into displayValue 
Get operator, store displayValue into storedValue
Get number, put number into currentValue, apply operator to displayValue and currentValue
Repeat the previous two steps for some amount of time
On equal, finalize displayValue
 */