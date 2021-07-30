const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiple = (x, y) => x * y;
const divide = (x, y) => x / y;

function operate(operator, y) {
    switch(operator) {
        case "+": 
            add(displayValue, y);
            break;
        case "-":
            subtract(displayValue, y);
            break;
        case "*":
            multiply(displayValue, y);
            break;
        case "/":
            divide(displayValue, y);
            break;
        default:
            alert("No operator")
    }
}

function pressNumber(numberKey) {
    displayValue = numberKey;
    document.querySelector("#display").textContent = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.querySelector("#display").textContent = displayValue;
}

let displayValue;

/*
Get number, put number into displayValue and currentValue
Get operator, get ready to call correct function, update displayValue, wait for next number
Get number, put number into currentValue, apply operator to displayValue and currentValue
Repeat the previous two steps for some amount of time
On equal, finalize displayValue
 */