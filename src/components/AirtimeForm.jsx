import React, { useState } from 'react';
import '../css/AirtimeForm.css';

const AirtimeForm = () => {
  const [amount, setAmount] = useState('');

  const handleQuickAmount = (value) => {
    setAmount(value);
  };

  return (
    <div className="airtime-form">
      <div className="form-group">
        <label htmlFor="network">Select Network</label>
        <select id="network" className="form-control">
          <option value="">-- Select Network --</option>
          <option value="mtn">MTN</option>
          <option value="airtel">Airtel</option>
          <option value="glo">Glo</option>
          <option value="mobile9">9mobile</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" className="form-control" placeholder="Enter phone number" />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount (₦)</label>
        <input
          type="number"
          id="amount"
          className="form-control"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="quick-amounts">
        {[100, 200, 500, 1000].map((amt) => (
          <button
            key={amt}
            className="amount-btn"
            onClick={() => handleQuickAmount(amt)}
          >
            ₦{amt.toLocaleString()}
          </button>
        ))}
      </div>

      <button className="btn btn-primary btn-block" id="buy-airtime-btn">
        Buy Airtime Now
      </button>

      <div className="wallet-balance">
        <p>Available Balance: <span>₦5,545,000.00</span></p>
      </div>
    </div>
  );
};

export default AirtimeForm;
