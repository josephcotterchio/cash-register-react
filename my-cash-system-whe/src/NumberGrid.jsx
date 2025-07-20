import React from 'react';
import './CashRegisterSystem.css';

export function NumberGrid({ selectedNumbers, toggleNumber }) {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="number-grid">
      {numbers.map(num => (
        <button
          key={num}
          onClick={() => toggleNumber(num)}
          className={`number-button ${selectedNumbers.includes(num) ? 'selected' : ''}`}
        >
          {num}
        </button>
      ))}
    </div>
  );
} // Need to update this and the .css in future to incorporate the buttons into the number grid.
