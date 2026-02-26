import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faPlus, faArrowUpRightFromSquare, faWallet } from '@fortawesome/free-solid-svg-icons';
import '../css/Wallet.css'

const Wallet = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const balance = 2500000;

  return (
    <div className="wallet-card">
      <div className="wallet-main-content">
        <div className="wallet-info">
          <div className="wallet-label">
            <FontAwesomeIcon icon={faWallet} className="wallet-icon-mini" />
            <span>Total Available Balance</span>
          </div>
          <div className="wallet-balance-row">
            <h2 className="wallet-balance">
              ₦{balanceVisible ? balance.toLocaleString() : '••••••'}
            </h2>
            <button
              className="balance-visibility-toggle"
              onClick={() => setBalanceVisible(!balanceVisible)}
            >
              <FontAwesomeIcon icon={balanceVisible ? faEyeSlash : faEye} />
            </button>
          </div>
          <div className="wallet-badge">
            <span className="dot"></span>
            Active Wallet
          </div>
        </div>

        <div className="wallet-actions-grid">
          <a href="/fund-wallet" className="action-link">
            <button className="btn-primary-white">
              <FontAwesomeIcon icon={faPlus} />
              <span>Add Money</span>
            </button>
          </a>
          <button className="btn-secondary-glass">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <span>Withdraw</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;