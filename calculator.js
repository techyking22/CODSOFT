let display = document.getElementById('display');

// Append value to display
function appendValue(value) {
    display.value += value;
}

// Insert function with auto brackets
function insertFunction(func) {
    display.value += func + '(';

}

// Choose log type (log2 or log10)
function chooseLog() {
    let choice = prompt("Enter base for log (2 for log2, 10 for log10):", "10");
    if (choice === "2") {
        insertFunction("log2");
    } else {
        insertFunction("log10");
    }
}

// Clear display
function clearDisplay() {
    display.value = '';
}

// Delete last character (Backspace)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result safely
function calculateResult() {
    try {
        let expression = display.value
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/sqrt/g, 'Math.sqrt')
            .replace(/log10/g, 'Math.log10')
            .replace(/log2/g, 'Math.log2')
            .replace(/ln/g, 'Math.log')
            .replace(/pi/g, 'Math.PI')
            .replace(/e/g, 'Math.E');

        display.value = eval(expression);
    } catch {
        display.value = 'Error';
    }
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    let key = event.key;

    if (/[\d+\-*/.()]/.test(key)) {
        appendValue(key); // Allow numbers and operators
    } else if (key === 'Enter') {
        calculateResult(); // Press Enter to calculate
    } else if (key === 'Backspace') {
        deleteLast(); // Press Backspace to delete
    } else if (key === 'Escape') {
        clearDisplay(); // Press ESC to clear display
    }
});
