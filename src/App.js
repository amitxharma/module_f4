import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  const handleOperation = (op) => {
    if (num1 === "" || num2 === "") {
      setMessage("Please enter both numbers");
      return;
    }

    let calculatedResult;
    switch (op) {
      case "+":
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        calculatedResult = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        setMessage("Invalid operation");
        return;
    }

    setMessage("Success");
    setResult(calculatedResult.toFixed(2));
  };

  return (
    <div className="App">
      <div className="calculator-card">
        <h2>React Calculator</h2>
        <input
          type="text"
          placeholder="Num 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Num 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div className="operation-buttons">
          <button onClick={() => handleOperation("+")}>+</button>
          <button onClick={() => handleOperation("-")}>-</button>
          <button onClick={() => handleOperation("*")}>*</button>
          <button onClick={() => handleOperation("/")}>/</button>
        </div>
        <p>{message}</p>
        {message === "Success" && <p>Result: {result}</p>}
      </div>
    </div>
  );
}

export default App;
