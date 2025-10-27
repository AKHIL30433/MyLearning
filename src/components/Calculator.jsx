import React, { useState } from 'react';
import '../App.css'; // Make sure to import your CSS file

function Calculator() {
  const [scores, setScores] = useState({
    lecture: '',
    tutorial: '',
    practical: '',
    skill: '',
  });
  const [average, setAverage] = useState(null);

  const components = [
    { name: 'lecture', label: 'Lecture', weight: 100 },
    { name: 'tutorial', label: 'Tutorial', weight: 100 },
    { name: 'practical', label: 'Practical', weight: 50 },
    { name: 'skill', label: 'Skill', weight: 25 },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setScores({ ...scores, [name]: value });
  };

  const handleCalculate = () => {
    let totalWeightedSum = 0;
    let totalWeights = 0;

    components.forEach(component => {
      const scoreValue = scores[component.name];
      if (scoreValue.trim() !== '' && !isNaN(parseFloat(scoreValue))) {
        totalWeightedSum += parseFloat(scoreValue) * component.weight;
        totalWeights += component.weight;
      }
    });

    setAverage(totalWeights > 0 ? (totalWeightedSum / totalWeights) : null);
  };

  const handleReset = () => {
    setScores({ lecture: '', tutorial: '', practical: '', skill: '' });
    setAverage(null);
  };

  return (
    <div className="calculator-container">
      <h1 className="title">L-T-P-S Average Calculator</h1>
      <div className="inputs-grid">
        {components.map(({ name, label, weight }) => (
          <div className="input-group" key={name}>
            <label htmlFor={name}>{label} <span>(Weight: {weight}%)</span></label>
            <input
              type="number"
              id={name}
              name={name}
              value={scores[name]}
              onChange={handleInputChange}
              placeholder="e.g., 85"
            />
          </div>
        ))}
      </div>
      <div className="buttons-container">
        <button onClick={handleCalculate} className="btn-calculate">Calculate</button>
        <button onClick={handleReset} className="btn-reset">Reset</button>
      </div>

      {average !== null && (
        <div className="result-container">
          <p className="result-label">Your Weighted Average</p>
          <p className="result-percentage">{average.toFixed(2)}%</p>
          {average < 75 && <p className="result-message">Keep Improving!</p>}
        </div>
      )}
    </div>
  );
}

export default Calculator;
