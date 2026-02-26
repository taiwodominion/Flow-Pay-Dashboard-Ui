import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWallet, 
  faChevronDown, 
  faExternalLinkAlt, 
  faCoins, 
  faShieldAlt,
  faFutbol,
  faBullseye,
  faTrophy,
  faDice,
  faCrown,
  faGamepad
} from '@fortawesome/free-solid-svg-icons';
import '../css/BettingContent.css';

const BettingContent = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [amount, setAmount] = useState('');
  const [username, setUsername] = useState('');

  const platforms = [
    { id: 'bet9ja', name: 'Bet9ja', icon: faBullseye, min: 100, max: 1000000, color: 'green' },
    { id: 'sportybet', name: 'SportyBet', icon: faFutbol, min: 100, max: 500000, color: 'blue' },
    { id: '1xbet', name: '1xBet', icon: faTrophy, min: 200, max: 2000000, color: 'orange' },
    { id: 'nairabet', name: 'NairaBet', icon: faDice, min: 50, max: 100000, color: 'purple' },
    { id: 'betking', name: 'BetKing', icon: faCrown, min: 100, max: 750000, color: 'red' },
    { id: '22bet', name: '22Bet', icon: faGamepad, min: 100, max: 1500000, color: 'yellow' },
  ];

  const quickAmounts = [500, 1000, 2000, 5000, 10000, 20000];

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
  };

  const handleQuickAmountSelect = (quickAmount) => {
    setAmount(quickAmount.toString());
  };

  const transactionAmount = amount ? parseFloat(amount) : 0;
  const platformFee = 0; 
  const totalAmount = transactionAmount + platformFee;

  return (
    <main className="betting-content">
      <div className="betting-container">
        <div className="betting-header">
          <h1 className="betting-title">
            <FontAwesomeIcon icon={faCoins} className="wallet-header-icon" />
            Betting Wallet Funding
          </h1>
          <p className="betting-subtitle">Fund your favorite betting accounts instantly and securely</p>
        </div>
        
        <div className="betting-platforms-card">
          <div className="platforms-card-header">
            <h3 className="platforms-card-title">Select Platform</h3>
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
                    <div className="platform-icon-wrapper">
                      <FontAwesomeIcon icon={platform.icon} />
                    </div>
                    <div className="platform-details">
                      <p className="platform-name">{platform.name}</p>
                      <p className="platform-limits">Min: ₦{platform.min} | Max: ₦{platform.max.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="platform-actions">
                    <p className="platform-fee">0% Fee</p>
                    <button className="platform-external-link">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="betting-form-card">
          <div className="form-card-header">
            <h3 className="form-card-title">Account Details</h3>
          </div>
          <div className="form-card-content">
            <div className="form-field">
              <label className="form-label">Selected Platform</label>
              <div className="platform-select-box">
                <span className={`selected-platform-text ${selectedPlatform ? 'active' : ''}`}>
                  {selectedPlatform ? selectedPlatform.name : 'Choose betting platform'}
                </span>
                <FontAwesomeIcon icon={faChevronDown} className="select-arrow-icon" />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="username" className="form-label">Customer User ID / Username</label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Enter account ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="form-label">Quick Top-up</label>
              <div className="quick-amounts-grid">
                {quickAmounts.map(quickAmount => (
                  <button
                    key={quickAmount}
                    className={`quick-amount-button ${amount === quickAmount.toString() ? 'active' : ''}`}
                    onClick={() => handleQuickAmountSelect(quickAmount)}
                  >
                    ₦{quickAmount.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="amount" className="form-label">Amount (₦)</label>
              <input
                type="number"
                id="amount"
                className="form-input"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="transaction-summary">
              <div className="summary-header">
                <FontAwesomeIcon icon={faShieldAlt} />
                <h4 className="summary-title">Order Summary</h4>
              </div>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>₦{transactionAmount.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Service Fee:</span>
                  <span className="fee-amount">₦{platformFee.toLocaleString()}</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total Payable:</span>
                  <span className="total-value">₦{totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button className="submit-button">
                <FontAwesomeIcon icon={faWallet} />
                Fund Wallet Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BettingContent;