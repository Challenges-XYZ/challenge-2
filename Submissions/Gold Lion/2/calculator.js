function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;
  var result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = "Please enter valid numbers";
    return;
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        document.getElementById("result").innerHTML =
          "Division by zero is not allowed";
        return;
      }
      result = num1 / num2;
      break;
    default:
      document.getElementById("result").innerHTML = "Invalid operator";
      return;
  }

  document.getElementById("result").innerHTML = "Result: " + result;
}
