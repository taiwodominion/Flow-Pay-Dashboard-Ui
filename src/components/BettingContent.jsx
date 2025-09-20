import React, { useState } from 'react';
import '../css/BettingContent.css';

const BettingContent = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [amount, setAmount] = useState('');
  const [username, setUsername] = useState('');

  const platforms = [
    { 
      id: 'bet9ja', 
      name: 'Bet9ja', 
      emoji: '🎯', 
      min: 100, 
      max: 1000000, 
      color: 'green' 
    },
    { 
      id: 'sportybet', 
      name: 'SportyBet', 
      emoji: '⚽', 
      min: 100, 
      max: 500000, 
      color: 'blue' 
    },
    { 
      id: '1xbet', 
      name: '1xBet', 
      emoji: '🏆', 
      min: 200, 
      max: 2000000, 
      color: 'orange' 
    },
    { 
      id: 'nairabet', 
      name: 'NairaBet', 
      emoji: '🎲', 
      min: 50, 
      max: 100000, 
      color: 'purple' 
    },
    { 
      id: 'betking', 
      name: 'BetKing', 
      emoji: '👑', 
      min: 100, 
      max: 750000, 
      color: 'red' 
    },
    { 
      id: '22bet', 
      name: '22Bet', 
      emoji: '🎮', 
      min: 100, 
      max: 1500000, 
      color: 'yellow' 
    },
  ];

  const quickAmounts = [500, 1000, 2000, 5000, 10000, 20000];

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
  };

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  const handleQuickAmountSelect = (quickAmount) => {
    setAmount(quickAmount.toString());
  };

  const handleCustomAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Calculate transaction summary
  const transactionAmount = amount ? parseFloat(amount) : 0;
  const platformFee = 0; // 0% fee
  const totalAmount = transactionAmount + platformFee;

  return (
    <main className="betting-content">
      <div className="betting-container">
        <div className="betting-header">
          <h1 className="betting-title">
            <span className="dollar-icon">💰</span>
            Betting Wallet Funding
          </h1>
          <p className="betting-subtitle">Fund your betting account instantly</p>
        </div>
        
        {/* Betting Platforms Section */}
        <div className="betting-platforms-card">
          <div className="platforms-card-header">
            <h3 className="platforms-card-title">Select Betting Platform</h3>
          </div>
          <div className="platforms-card-content">
            <div className="platforms-grid">
              {platforms.map(platform => (
                <div 
                  key={platform.id}
                  className={`platform-item platform-item-${platform.color} ${selectedPlatform?.id === platform.id ? 'platform-item-selected' : ''}`}
                  onClick={() => handlePlatformSelect(platform)}
                >
                  <div className="platform-info">
                    <div className="platform-emoji">{platform.emoji}</div>
                    <div className="platform-details">
                      <p className="platform-name">{platform.name}</p>
                      <p className="platform-limits">Min: ₦{platform.min} | Max: ₦{platform.max.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="platform-actions">
                    <p className="platform-fee">0% Fee</p>
                    <button className="platform-external-link">
                      <span className="external-link-icon">↗</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Betting Form Section */}
        <div className="betting-form-card">
          <div className="form-card-header">
            <h3 className="form-card-title">Fund Betting Account</h3>
          </div>
          <div className="form-card-content">
            <div className="form-field">
              <label htmlFor="platform" className="form-label">Selected Platform</label>
              <div className="platform-select">
                <span className="selected-platform">
                  {selectedPlatform ? selectedPlatform.name : 'Choose betting platform'}
                </span>
                <span className="select-arrow">▼</span>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="username" className="form-label">Betting Username/ID</label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Enter your betting username or ID"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>

            <div className="form-field">
              <label className="form-label">Quick Amounts</label>
              <div className="quick-amounts-grid">
                {quickAmounts.map(quickAmount => (
                  <button
                    key={quickAmount}
                    className="quick-amount-button"
                    onClick={() => handleQuickAmountSelect(quickAmount)}
                  >
                    ₦{quickAmount.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="amount" className="form-label">Custom Amount</label>
              <input
                type="number"
                id="amount"
                className="form-input"
                placeholder="Enter amount"
                value={amount}
                onChange={handleCustomAmountChange}
              />
            </div>

            <div className="transaction-summary">
              <h4 className="summary-title">Transaction Summary</h4>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Amount:</span>
                  <span>₦{transactionAmount.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Platform Fee:</span>
                  <span className="fee-amount">₦{platformFee.toLocaleString()}</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total:</span>
                  <span>₦{totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button className="submit-button">Fund Betting Account</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BettingContent;