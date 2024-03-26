import React, { useState } from 'react';
import axios from 'axios';

function TaxCalculator() {
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);

  const handleCalculateTax = () => {
    axios.post('/calculateTax', { transactionAmount })
      .then(response => {
        setTaxAmount(response.data.taxAmount);
      })
      .catch(error => {
        console.error('Error calculating tax:', error);
      });
  };

  return (
    <div className="TaxCalculator">
      <h2>Tax Calculator</h2>
      <label>
        Transaction Amount:
        <input
          type="number"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(parseFloat(e.target.value))}
        />
      </label>
      <button onClick={handleCalculateTax}>Calculate Tax</button>
      <p>Tax Amount: ${taxAmount.toFixed(2)}</p>
    </div>
  );
}

export default TaxCalculator;
