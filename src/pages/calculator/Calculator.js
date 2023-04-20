import React, { useState } from "react";
import "./calc.css";

export const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
    setResult("");
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  const clearAll = () => {
    setResult("");
    setCalc("");
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          className="btn"
          onClick={() => updateCalc(i.toString())}
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="calculator-home">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display-calc">
          {result ? <span>({result})</span> : ""}
          &nbsp;
          {calc || "0"}
        </div>
        <div className="operators">
          <button className="btn" onClick={clearAll}>
            C
          </button>

          <button className="btn" onClick={() => updateCalc("/")}>
            /
          </button>
          <button className="btn" onClick={() => updateCalc("*")}>
            *
          </button>
          <button className="btn" onClick={() => updateCalc("+")}>
            +
          </button>
          <button className="btn" onClick={() => updateCalc("-")}>
            -
          </button>

          <button className="btn" onClick={deleteLast}>
            DEL
          </button>
        </div>

        <div className="digits">
          {createDigits()}
          <button className="btn" onClick={() => updateCalc("0")}>
            0
          </button>
          <button className="btn" onClick={() => updateCalc(".")}>
            .
          </button>

          <button className="btn equal" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

// ? cant use more than 2 .
// ! 0 Error
// * Keyboards
