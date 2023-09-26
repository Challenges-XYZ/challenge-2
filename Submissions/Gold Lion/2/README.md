# Programming Challenge 2 Solution

## Description

This code creates a simple calculator that takes user input for two numbers and an operator, performs the corresponding operation, and displays the result. It also handles division by zero and provides appropriate feedback to the user. The user can continue performing calculations until they choose to exit.

## Explain about this code

The provided code is a simple calculator implemented using HTML, CSS, and JavaScript. Let's go through the code and explain how division by zero is handled.

In the JavaScript portion of the code (calculator.js), we have a function called calculate() . This function is called when the "Calculate" button is clicked on the HTML page.

Inside the calculate() function, we first retrieve the values entered by the user for the two numbers and the operator using the getElementById() method. We parse the input values as floats using parseFloat() to ensure we can perform arithmetic calculations on them.

Next, we have an if statement to check if the input values are valid numbers. If either of the numbers is not a valid number (NaN), we display the message "Please enter valid numbers" to the user by setting the innerHTML property of the result paragraph ( <p> ) element.

If the input values are valid, we proceed to a switch statement that checks the value of the operator. Depending on the operator, we perform the corresponding arithmetic operation on the two numbers and store the result in the result variable.

For division ( / ), we have an additional check to handle division by zero. If the second number ( num2 ) is zero, we display the message "Division by zero is not allowed" to the user by setting the innerHTML property of the result paragraph element. We also return from the function to prevent further execution.

If none of the above conditions are met, we display the calculated result to the user by setting the innerHTML property of the result paragraph element to "Result: " concatenated with the calculated result.

By handling the division by zero case separately, we ensure that the calculator provides appropriate feedback to the user and prevents any potential errors or unexpected behavior.

Feel free to ask if you have any further questions!
