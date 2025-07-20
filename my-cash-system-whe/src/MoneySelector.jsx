import React from 'react';
import './CashRegisterSystem.css';

export function MoneySelector({ handleMoneyValue }) {
  const moneyValues = [1, 5, 10, 20];

  return (
    <div className="money-selector-container">
      {moneyValues.map(val => (
        <button
          key={val}
          onClick={() => handleMoneyValue(val)}
          className="money-button"
        >
          ${val}
        </button>
      ))}
    </div>
  );
}
