import ReactDOM from "react-dom";
import ScaleText from "react-scale-text";
import React from "react";

function App() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = [
    {math: "÷", javascript: "/"},
    {math: "×", javascript: "*"},
    {math: "-", javascript: "-"},
    {math: "+", javascript: "+"},
  ];

  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [display, setDisplay] = React.useState(0);

  function reset() {
    setNum1("");
    setNum2("");
    setOperator("");
    setDisplay(0);
  }

  function inputNumber(number) {
    if (!operator) {
      const result = num1 + number;
      setNum1(result);
      setDisplay(Number(result));
    } else {
      const result = num2 + number;
      setNum2(result);
      setDisplay(Number(result));
    }
  }

  function inputOperator(operator) {
    setOperator(operator);
    setDisplay(0);
  }

  function calculate() {
    const n1 = Number(num1);
    const n2 = Number(num2);

    let result;
    switch (operator) {
      case "/":
        result = n1 / n2;
        break;
      case "*":
        result = n1 * n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "+":
        result = n1 + n2;
        break;
    }
    setDisplay(result);
    setNum1(`${result}`);
    setNum2("");
  }

  return (
    <div className="main">
      <div className="display">
        <ScaleText minFontSize={16} maxFontSize={32}>
          <div className="text">{display}</div>
        </ScaleText>
      </div>
      <div className="keypad">
        <div className="input-keys">
          <div className="function-keys">
            <button onClick={reset}>AC</button>
          </div>
          <div className="digit-keys">
            {numbers.map(number => (
              <button onClick={() => inputNumber(`${number}`)}>{number}</button>
            ))}
          </div>
        </div>
        <div className="operator-keys">
          {operators.map(operator => (
            <button onClick={() => inputOperator(operator.javascript)}>{operator.math}</button>
          ))}
          <button onClick={() => calculate()}>=</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
