import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faChevronDown, faUserCheck, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import '../css/ElectricityPayment.css';

const ElectricityPayment = () => {
  const [selectedProvider, setSelectedProvider] = useState('');
  const [meterNumber, setMeterNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState('');
  
  const quickAmounts = [1000, 2000, 3000, 5000, 10000, 15000];
  
  const handleQuickAmountSelect = (amountValue) => {
    setAmount(amountValue);
  };
  
  const handleVerifyMeter = () => {
    if (meterNumber) {
      setCustomerName("John Doe (Verified)");
    }
  };

  return (
    <div className="electricity-container">
      <div className="electricity-header-info">
        <h1>
          <FontAwesomeIcon icon={faBolt} className="bolt-icon" />
          Electricity Bill Payment
        </h1>
        <p>Top up your prepaid or postpaid meter instantly</p>
      </div>

      <div className="electricity-card">
        <div className="card-header">
          <div className="header-flex">
            <FontAwesomeIcon icon={faLightbulb} className="header-icon" />
            <h3 className="card-title">Meter Details</h3>
          </div>
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
                <option value="ikeja">Ikeja Electric (IKEDC)</option>
                <option value="eko">Eko Electric (EKEDC)</option>
                <option value="abuja">Abuja Electric (AEDC)</option>
                <option value="kano">Kano Electric (KEDCO)</option>
              </select>
              <FontAwesomeIcon icon={faChevronDown} className="select-arrow" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="meter">Meter Number</label>
            <div className="input-with-action">
              <input
                type="text"
                id="meter"
                placeholder="Enter meter number"
                value={meterNumber}
                onChange={(e) => setMeterNumber(e.target.value)}
                className="meter-input"
              />
              <button className="verify-inline-btn" onClick={handleVerifyMeter}>
                Verify
              </button>
            </div>
          </div>

          {customerName && (
            <div className="form-group verified-group">
              <label htmlFor="customerName">
                <FontAwesomeIcon icon={faUserCheck} /> Registered Name
              </label>
              <input
                type="text"
                id="customerName"
                value={customerName}
                disabled
                className="customer-input"
              />
            </div>
          )}

          <div className="form-group">
            <label>Select Quick Amount</label>
            <div className="quick-amounts-grid">
              {quickAmounts.map((amountValue) => (
                <button
                  key={amountValue}
                  className={`amount-btn ${Number(amount) === amountValue ? 'selected' : ''}`}
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
              placeholder="Enter amount manually"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="amount-input"
            />
          </div>

          <div className="action-buttons">
            <button className="pay-btn">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricityPayment;