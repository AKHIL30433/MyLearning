import React, { useState } from 'react';
import Calculator from './components/Calculator.jsx';
import ResultDisplay from './components/ResultDisplay.jsx';

import './App.css'; // Make sure to import the new CSS

function App() {
  const [totalAttendance, setTotalAttendance] = useState(null);

  // Receives the calculated result from the Calculator component
  const handleCalculate = (result) => {
    setTotalAttendance(result);
  };

  // Handles the reset action
  const handleReset = () => {
    setTotalAttendance(null);
  };

  return (
    <div className="container">
      <h1 className="title">L-T-P-S Average Calculator</h1>
      <Calculator onCalculate={handleCalculate} onReset={handleReset} />
      <ResultDisplay totalAttendance={totalAttendance} />
    </div>
  );
}

export default App;
