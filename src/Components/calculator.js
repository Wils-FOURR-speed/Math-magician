function CalcDisplay() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="resultScreen">
          0
        </div>

        <div className="buttonSet1">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="operatorBtn">÷</button>
        </div>

        <div className="buttonSet2">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="operatorBtn">x</button>
        </div>

        <div className="buttonSet3">
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="operatorBtn">-</button>
        </div>

        <div className="buttonSet4">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="operatorBtn">+</button>
        </div>
        <div className="buttonSet5">
          <button type="button" className="bigger">0</button>
          <button type="button">.</button>
          <button type="button" className="operatorBtn">=</button>
        </div>
      </div>
    </div>
  );
}

export default CalcDisplay;
