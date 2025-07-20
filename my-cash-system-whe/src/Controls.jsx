import React from 'react';
import './CashRegisterSystem.css';

export function Controls({ handleClear, handleRandom, handleCash }) {
  return (
    <div className="controls-container">
      <button onClick={handleCash} className="control-button">Cash</button>
      <button onClick={handleRandom} className="control-button">Random</button>
      <button onClick={handleClear} className="control-button">Clear</button>
      
      
    </div>
  );
} // need to update this and the .css in future to inconporate the buttons into the number grid.
