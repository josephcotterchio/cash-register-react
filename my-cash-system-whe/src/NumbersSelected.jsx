import React from 'react';
import './CashRegisterSystem.css';

export function NumbersSelected({ selectedNumbers, moneyTotal }) {
  return (
    <div>
      <h3>Numbers Selected:</h3>
      <p>{selectedNumbers.join(', ')}</p>
      {moneyTotal !== null && (
        <p>Total Money: ${moneyTotal}</p>
      )}
    </div>
  );
}
