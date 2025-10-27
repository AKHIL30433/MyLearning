import React, { useState } from 'react';
import { BookOpen, Award, Sliders, Code } from 'lucide-react';

// This is our reusable input field component
const InputField = ({ icon, label, weight, value, onChange }) => (
  <div className="input-group">
    <label>
      {icon} {label} <span className="weight">(Weight: {weight}%)</span>
    </label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="e.g., 85"
      min="0"
      max="100"
    />
  </div>
);

const Calculator = ({ onCalculate, onReset }) => {
  const [lecture, setLecture] = useState('');
  const [tutorial, setTutorial] = useState('');
  const [practical, setPractical] = useState('');
  const [skill, setSkill] = useState('');

  const handleCalculate = () => {
    // Get all input values, defaulting to 0
    const lec = parseFloat(lecture) || 0;
    const tut = parseFloat(tutorial) || 0;
    const prac = parseFloat(practical) || 0;
    const skl = parseFloat(skill) || 0;

    // Define the weights for each component
    const weights = { lec: 1.0, tut: 1.0, prac: 0.5, skl: 0.25 };
    const totalWeight = weights.lec + weights.tut + weights.prac + weights.skl;

    // Calculate the weighted sum of all inputs
    const weightedSum = (lec * weights.lec) + (tut * weights.tut) + (prac * weights.prac) + (skl * weights.skl);

    // Calculate the final weighted average
    const finalScore = totalWeight > 0 ? weightedSum / totalWeight : 0;

    onCalculate(finalScore.toFixed(2));
  };

  const handleReset = () => {
    setLecture('');
    setTutorial('');
    setPractical('');
    setSkill('');
    onReset();
  };

  return (
    <>
      <div className="input-grid">
        <InputField icon={<BookOpen size={20} />} label="Lecture" weight={100} value={lecture} onChange={setLecture} />
        <InputField icon={<Award size={20} />} label="Tutorial" weight={100} value={tutorial} onChange={setTutorial} />
        {/* The weight for Practical is now updated to 50% */}
        <InputField icon={<Sliders size={20} />} label="Practical" weight={50} value={practical} onChange={setPractical} />
        <InputField icon={<Code size={20} />} label="Skill" weight={25} value={skill} onChange={setSkill} />
      </div>
      <div className="button-group">
        <button onClick={handleCalculate} className="btn btn-primary">Calculate</button>
        <button onClick={handleReset} className="btn btn-secondary">Reset</button>
      </div>
    </>
  );
};

export default Calculator;
