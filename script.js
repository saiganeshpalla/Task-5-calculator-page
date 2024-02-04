let display = document.getElementById('display');
let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(currentInput);
    } catch (error) {
        display.value = "Error";
    }
}
