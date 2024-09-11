import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleBtnClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "<") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((preValue) => preValue + value);
    }
  };
  return (
    <div className="container">
      <div className="calc">
        <h1 id="input">{input}</h1>
        <div>
          <button onClick={() => handleBtnClick("C")}>C</button>
          <button onClick={() => handleBtnClick("<")}>&lt;</button>
          <button onClick={() => handleBtnClick("%")}>%</button>
          <button onClick={() => handleBtnClick("/")}> /</button>
        </div>
        <div>
          <button onClick={() => handleBtnClick("7")}>7</button>
          <button onClick={() => handleBtnClick("8")}>8</button>
          <button onClick={() => handleBtnClick("9")}>9</button>
          <button onClick={() => handleBtnClick("*")}>*</button>
        </div>
        <div>
          <button onClick={() => handleBtnClick("4")}>4</button>
          <button onClick={() => handleBtnClick("5")}>5</button>
          <button onClick={() => handleBtnClick("6")}>6</button>
          <button onClick={() => handleBtnClick("-")}>-</button>
        </div>
        <div>
          <button onClick={() => handleBtnClick("1")}>1</button>
          <button onClick={() => handleBtnClick("2")}>2</button>
          <button onClick={() => handleBtnClick("3")}>3</button>
          <button onClick={() => handleBtnClick("+")}>+</button>
        </div>
        <div>
          <button onClick={() => handleBtnClick("0")}>0</button>
          <button onClick={() => handleBtnClick("00")}>00</button>
          <button onClick={() => handleBtnClick(".")}>.</button>
          <button onClick={() => handleBtnClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
