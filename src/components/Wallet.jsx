// src/components/Wallet.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../css/Wallet.css'

const Wallet = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const balance = 250000;

  return (
    <div className="wallet-card">
      <div className="wallet-header">
        <div>
          <p className="wallet-title">Wallet Balance</p>
          <div className="wallet-balance-container">
            <p className="wallet-balance">
              ₦{balanceVisible ? balance.toLocaleString() : '•••••'}
            </p>
            <button
              className="wallet-toggle"
              onClick={() => setBalanceVisible(!balanceVisible)}
            >
              <FontAwesomeIcon icon={balanceVisible ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
      </div>
      <div className="wallet-actions">
        <a href="/fund-wallet">
          <button className="btn-primary">
            <FontAwesomeIcon icon={faPlus} />
            Fund Wallet
          </button>
        </a>
        <button className="btn-secondary">
          <FontAwesomeIcon icon={faArrowRight} />
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default Wallet;