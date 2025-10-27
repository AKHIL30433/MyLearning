import React from 'react';

const ResultDisplay = ({ totalAttendance }) => {
  // Don't render anything if a calculation hasn't been made
  if (totalAttendance === null) {
    return null;
  }

  const attendanceScore = parseFloat(totalAttendance);
  const isSafe = attendanceScore >= 85;

  return (
    <div className="result-display">
      <h2 className="result-title">Your Weighted Average</h2>
      <p className="result-score">{totalAttendance}%</p>
      
      {/* Impressive message with dynamic styling */}
      <p className={`status-message ${isSafe ? 'safe' : 'danger'}`}>
        {isSafe ? '🎉 You\'re Safe!' : '⚠️ Keep Improving!'}
      </p>
    </div>
  );
};

export default ResultDisplay;
