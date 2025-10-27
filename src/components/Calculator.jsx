import React, { useState } from 'react';

// Configuration for each input field
const components = [
  { name: 'lecture', label: 'Lecture', weight: 100 },
  { name: 'tutorial', label: 'Tutorial', weight: 100 },
  { name: 'practical', label: 'Practical', weight: 50 },
  { name: 'skill', label: 'Skill', weight: 25 },
];

function Calculator() {
  const [scores, setScores] = useState({
    lecture: '',
    tutorial: '',
    practical: '',
    skill: '',
  });
  const [average, setAverage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setScores({ ...scores, [name]: value });
  };

  const handleCalculate = () => {
    let totalWeightedSum = 0;
    let totalWeights = 0;

    components.forEach(component => {
      const scoreValue = scores[component.name];
      // Check if the input is not empty and is a valid number
      if (scoreValue !== '' && !isNaN(parseFloat(scoreValue))) {
        totalWeightedSum += parseFloat(scoreValue) * component.weight;
        totalWeights += component.weight;
      }
    });

    if (totalWeights > 0) {
      setAverage(totalWeightedSum / totalWeights);
    } else {
      setAverage(0); // Or null, if you prefer to show no result
    }
  };

  const handleReset = () => {
    setScores({
      lecture: '',
      tutorial: '',
      practical: '',
      skill: '',
    });
    setAverage(null);
  };

  return (
    <div>
      <h1>L-T-P-S Average Calculator</h1>
      {components.map(comp => (
        <div key={comp.name}>
          <label>{comp.label} (Weight: {comp.weight}%)</label>
          <input
            type="number"
            name={comp.name}
            value={scores[comp.name]}
            onChange={handleInputChange}
            placeholder={`e.g., 85`}
          />
        </div>
      ))}
      <button onClick={handleCalculate}>Calculate</button>
      <button onClick={handleReset}>Reset</button>

      {average !== null && (
        <div>
          <h2>Your Weighted Average</h2>
          <p>{average.toFixed(2)}%</p>
          {average < 60 && <p>Keep Improving!</p>}
        </div>
      )}
    </div>
  );
}

export default Calculator;
