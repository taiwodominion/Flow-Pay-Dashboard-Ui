import React, { useState } from 'react';
import '../css/ElectricityPayment.css';

const ElectricityPayment = () => {
  const [selectedProvider, setSelectedProvider] = useState('');
  const [meterNumber, setMeterNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState('');
  
  const quickAmounts = [1000, 2000, 3000, 5000, 10000, 15000];
  
  const handleQuickAmountSelect = (amount) => {
    setAmount(amount);
  };
  
  const handleVerifyMeter = () => {
    // Simulate meter verification
    if (meterNumber) {
      setCustomerName("Customer Name (Verified)");
    }
  };

  return (
    <div className="electricity-container">
      <div className="electricity-header">
        <h1>
          <i className="fas fa-bolt"></i>
          Electricity Bill Payment
        </h1>
        <p>Pay your electricity bills instantly</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Electricity Payment</h3>
        </div>
        <div className="card-content">
          <div className="form-group">
            <label htmlFor="provider">Select Electricity Provider</label>
            <div className="select-wrapper">
              <select 
                id="provider" 
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
              >
                <option value="">Choose your electricity provider</option>
                <option value="ikeja">Ikeja Electric</option>
                <option value="eko">Eko Electric</option>
                <option value="abuja">Abuja Electric</option>
                <option value="kano">Kano Electric</option>
              </select>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="meter">Meter Number</label>
            <input
              type="text"
              id="meter"
              placeholder="Enter meter number"
              value={meterNumber}
              onChange={(e) => setMeterNumber(e.target.value)}
              className="meter-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              placeholder="Customer name (auto-filled after verification)"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              disabled
              className="customer-input"
            />
          </div>

          <div className="form-group">
            <label>Quick Amounts</label>
            <div className="quick-amounts">
              {quickAmounts.map((amountValue) => (
                <button
                  key={amountValue}
                  className={`amount-btn ${amount === amountValue ? 'selected' : ''}`}
                  onClick={() => handleQuickAmountSelect(amountValue)}
                >
                  ₦{amountValue.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Custom Amount</label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="amount-input"
            />
          </div>

          <div className="action-buttons">
            <button className="verify-btn" onClick={handleVerifyMeter}>
              Verify Meter
            </button>
            <button className="pay-btn">
              Pay Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricityPayment;