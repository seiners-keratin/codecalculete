function calculateSum() {
    // Get user input
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if the input is valid
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calculate and display the sum
        const sum = num1 + num2;
        document.getElementById('result').textContent = `The sum is: ${sum}`;
    } else {
        // Display an error message for invalid input
        document.getElementById('result').textContent = 'Please enter valid numbers.';
    }
}
