import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
    setResult(''); // Clear previous result when typing new input
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      const evalResult = eval(input).toString();
      setResult(evalResult);
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{input}</div>
        <div className="result">{result ? '= ' + result : ''}</div>
      </div>

      <div className="buttons">
        <button onClick={clear} className="span-two">C</button>
        <button onClick={backspace}>←</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculate} className="span-two">=</button>
      </div>
    </div>
  );
}

export default Calculator;
