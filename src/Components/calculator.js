import React, { useState } from 'react';
import calculate from '../Logic/calculate';

function CalcDisplay() {
  const [displayInput, setDisplayInput] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClicks = (event) => {
    setDisplayInput(calculate(displayInput, event.target.textContent));
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="resultScreen">
          <p>{displayInput.next || displayInput.operation || displayInput.total || '0'}</p>
        </div>

        <div className="buttonSet1">
          <button onClick={handleClicks} type="button">AC</button>
          <button onClick={handleClicks} type="button">+/-</button>
          <button onClick={handleClicks} type="button">%</button>
          <button onClick={handleClicks} type="button" className="operatorBtn">÷</button>
        </div>

        <div className="buttonSet2">
          <button onClick={handleClicks} type="button">7</button>
          <button onClick={handleClicks} type="button">8</button>
          <button onClick={handleClicks} type="button">9</button>
          <button onClick={handleClicks} type="button" className="operatorBtn">x</button>
        </div>

        <div className="buttonSet3">
          <button onClick={handleClicks} type="button">4</button>
          <button onClick={handleClicks} type="button">5</button>
          <button onClick={handleClicks} type="button">6</button>
          <button onClick={handleClicks} type="button" className="operatorBtn">-</button>
        </div>

        <div className="buttonSet4">
          <button onClick={handleClicks} type="button">1</button>
          <button onClick={handleClicks} type="button">2</button>
          <button onClick={handleClicks} type="button">3</button>
          <button onClick={handleClicks} type="button" className="operatorBtn">+</button>
        </div>
        <div className="buttonSet5">
          <button onClick={handleClicks} type="button" className="bigger">0</button>
          <button onClick={handleClicks} type="button">.</button>
          <button onClick={handleClicks} type="button" className="operatorBtn">=</button>
        </div>
      </div>
    </div>
  );
}

export default CalcDisplay;
