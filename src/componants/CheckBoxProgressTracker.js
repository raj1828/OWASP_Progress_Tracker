import React, { useState } from 'react';
import './CircularProgressTracker.css'; // Import your CSS file for styling

const CheckBoxProgressTracker = () => {
  const checkboxes = [
    { id: 1, label: 'Broken Access Control' },
    { id: 2, label: 'Cryptographic Failures' },
    { id: 3, label: 'Injection' },
    { id: 4, label: 'Insecure Design' },
    { id: 5, label: 'Security Misconfiguration' },
    { id: 6, label: 'Vulnerable and Outdated Components' },
    { id: 7, label: 'Identification and Authentication Failures' },
    { id: 8, label: 'Software and Data Integrity Failures' },
    { id: 9, label: 'Security Logging and Monitoring Failures' },
    { id: 10, label: 'Server-Side Request Forgery' },
    // Add more checkboxes as needed
  ];

  const [progress, setProgress] = useState(0);
  const [checkedCount, setCheckedCount] = useState(0);

  const handleChange = (isChecked) => {
    const newCount = isChecked ? checkedCount + 1 : checkedCount - 1;
    setCheckedCount(newCount);
    const newProgress = (newCount / checkboxes.length) * 100;
    setProgress(newProgress);
  };

  const completionMessage =
    progress === 100 ? <p className="completion-message">Progress Completed!</p> : null;

  return (
    <div className="wrapper">
      <h1 className="website-heading">OWASP Guidelines Progress Tracker</h1>
      <div className="container">
        <div className="progress-column">
          <h2 className="column-heading">Progress Tracker</h2>
          <div
            className="progress-bar-container"
            style={{
              width: '80%', // Adjust width as needed
              backgroundColor: '#f0f7ff',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <div
              className="progress-bar"
              style={{
                width: `${progress}%`,
                backgroundColor: progress === 100 ? 'green' : '#007bff', // Change color to green when progress is 100%
                borderRadius: '5px',
                height: '20px',
                transition: `width 0.5s ${progress === 0 || progress === 100 ? 'ease' : 'linear'}`,
              }}
            />
          </div>
          <p className="progress-text">Progress: {progress.toFixed(2)}%</p>
          {completionMessage}
        </div>
        <div className="checkbox-column" style={{ width: '20%' }}> {/* Adjust width as needed */}
          <h2 className="column-heading">Tasks</h2>
          {checkboxes.map((checkbox) => (
            <div key={checkbox.id} className="checkbox-item">
              <input
                type="checkbox"
                id={`checkbox-${checkbox.id}`}
                onChange={(e) => handleChange(e.target.checked)}
              />
              <label htmlFor={`checkbox-${checkbox.id}`}>{checkbox.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckBoxProgressTracker;
