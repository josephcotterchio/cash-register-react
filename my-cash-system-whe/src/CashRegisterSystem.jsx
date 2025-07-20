import React, { useState, useEffect } from 'react';
import { NumberGrid } from './NumberGrid';
import { MoneySelector } from './MoneySelector';
import { NumbersSelected } from './NumbersSelected';
import { Controls } from './Controls';
import { Header } from './Header'; /* using a header as it's the easiest way to render the header. And what I'm familiar with from previous experience. */
import './CashRegisterSystem.css'; /* Usin a .css file as that's what I'm familiar with */

export function CashRegister() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [moneyTotal, setMoneyTotal] = useState(0);
  const [confirmedTotal, setConfirmedTotal] = useState(null); // only shown after Cash button is selected

  useEffect(() => {
    if (selectedNumbers.length > 5) {
      alert('You can only select 5 numbers.');
      setSelectedNumbers(prev => prev.slice(0, 5));
    }
  }, [selectedNumbers]);

  const toggleNumber = (num) => {
    setSelectedNumbers(prev =>
      prev.includes(num) ? prev.filter(n => n !== num) : [...prev, num]
    );
  };

  const canAssignMoney = () => {
    if (selectedNumbers.length < 5) {
      alert('Select 5 numbers first before assigning money values.');
      return false;
    }
    return true;
  };

  const handleMoneyValue = (amount) => {
    if (!canAssignMoney()) return;
    setMoneyTotal(prev => prev + amount);
  };

  const handleClear = () => {
    setSelectedNumbers([]);
    setMoneyTotal(0);
    setConfirmedTotal(null); /* reset display after Clear */
  };

  const handleRandom = () => {
    const nums = new Set();
    while (nums.size < 5) {
      nums.add(Math.floor(Math.random() * 20) + 1);
    }
    setSelectedNumbers(Array.from(nums));
    setMoneyTotal(0);
    setConfirmedTotal(null); // Resets for Random button
  };

  const handleCash = () => {
    if (selectedNumbers.length < 5) {
      alert('You must select 5 numbers to proceed.');
      return;
    }

    setConfirmedTotal(moneyTotal); // Confirming the total money assigned after Cash button is clicked
  };

  return (
    <div className="cash-register-container">
      <Header />
      <div className="main-content">

        <div className="left-section">
          <img
            src="/NumberBalls.png"
            alt=""
            className="number-balls-img"
          />
          <div className="assign-money-label">Assign Money below</div>
          <MoneySelector handleMoneyValue={handleMoneyValue} />
        </div> 
    
        <div className="center-section">
          <h3>Please pick 5 Numbers to proceed</h3>
          <div className="number-grid-wrapper">
            <NumberGrid selectedNumbers={selectedNumbers} toggleNumber={toggleNumber} />
          </div>
          <Controls
            handleClear={handleClear}
            handleRandom={handleRandom}
            handleCash={handleCash}
          />
        </div>

        <div className="right-section">
          <NumbersSelected
            selectedNumbers={selectedNumbers}
            moneyTotal={confirmedTotal}
          />
        </div>

      </div>
    </div>
  );
}