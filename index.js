const display = document.getElementById("display");

function appendToDisplay(input) {
    if (input >= 0 || input === '.' || input === '+' || input === '-' || input === '*' || input === '/') {
        display.value += input;
    }
}

// c btn
function clearDisplay() {
    display.value = "";
}

// = btn 
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// del btn 
function deleteLastChar() {
    let currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}

// modulo btn 
function appendToDisplay(char) {
    let currentValue = display.value;
    if (char === '%') {
        if (currentValue.length > 0 && !isNaN(currentValue[currentValue.length - 1])) {
            display.value += '%';
        }
    } else {
        display.value += char;
    }
}