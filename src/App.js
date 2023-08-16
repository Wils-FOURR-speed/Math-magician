import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import CalcDisplay from './Components/calculator';
import ShowQuotes from './Components/quote';
import Navbar from './Components/Navbar';
import Home from './Components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalcDisplay />} />
        <Route path="/quote" element={<ShowQuotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
