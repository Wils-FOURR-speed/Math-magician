import CalcDisplay from './Components/calculator';
import ShowQuotes from './Components/quote';

function App() {
  return (
    <div className="App">
      <div className="main">
        <CalcDisplay />
      </div>
      <div className="main">
        <ShowQuotes />
      </div>
    </div>
  );
}

export default App;
