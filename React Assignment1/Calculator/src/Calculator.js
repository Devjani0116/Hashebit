import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    if (parseFloat(num2) === 0) {
      setResult('Error: Division by zero');
    } else {
      setResult(parseFloat(num1) / parseFloat(num2));
    }
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Enter second number"
        />
      </div>
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <div>
        <h3>Result: {result !== null ? result : 'No calculation yet'}</h3>
      </div>
    </div>
  );
};


