import React, { useState } from 'react';
import './Airtime.css';

const Airtime = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const networks = [
    { id: 'mtn', name: 'MTN' },
    { id: 'airtel', name: 'Airtel' },
    { id: 'glo', name: 'Glo' },
    { id: '9mobile', name: '9mobile' }
  ];

  const quickAmounts = [100, 200, 500, 1000, 2000, 5000];

  const handleQuickAmountClick = (quickAmount) => {
    setAmount(quickAmount.toString());
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    // Handle purchase logic here
    console.log({
      network: selectedNetwork,
      phoneNumber,
      amount
    });
    alert('Airtime purchase successful!');
  };

  const selectNetwork = (network) => {
    setSelectedNetwork(network);
    setIsDropdownOpen(false);
  };

  return (
    <main className="airtime-main">
      <div className="airtime-container">
        <div className="text-center">
          <h1 className="airtime-title">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="phone-icon"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Buy Airtime
          </h1>
          <p className="muted-text">Purchase airtime for any network</p>
        </div>
        
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Airtime Purchase</h3>
          </div>
          
          <div className="card-content">
            <form onSubmit={handlePurchase}>
              <div className="form-group">
                <label htmlFor="network" className="form-label">
                  Select Network
                </label>
                <div className="dropdown">
                  <button 
                    type="button" 
                    className="dropdown-trigger"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="dropdown-value">
                      {selectedNetwork ? networks.find(n => n.id === selectedNetwork)?.name : 'Choose network'}
                    </span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="dropdown-menu">
                      {networks.map(network => (
                        <div 
                          key={network.id}
                          className="dropdown-item"
                          onClick={() => selectNetwork(network.id)}
                        >
                          {network.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input large-text"
                  placeholder="08012345678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  Quick Amounts
                </label>
                <div className="quick-amounts-grid">
                  {quickAmounts.map(quickAmount => (
                    <button
                      key={quickAmount}
                      type="button"
                      className="quick-amount-btn"
                      onClick={() => handleQuickAmountClick(quickAmount)}
                    >
                      ₦{quickAmount}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="amount" className="form-label">
                  Custom Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  className="form-input large-text"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              
              <div className="purchase-button-container">
                <button type="submit" className="purchase-button">
                  Purchase Airtime
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Airtime;