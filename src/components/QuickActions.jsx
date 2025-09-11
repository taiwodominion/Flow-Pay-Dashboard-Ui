import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faWifi,
  faTv,
  faBolt,
  faPlane,
  faDollarSign,
  faHistory,
  faWallet
} from '@fortawesome/free-solid-svg-icons';
import '../css/QuickActions.css'

const QuickActions = () => {
  return (
    <div className="quick-actions">
      <h2>Quick Actions</h2>
      <div className="actions-grid">
        <a href="/airtime" className="action-card blue">
          <div className="action-icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p className="action-label">Buy Airtime</p>
        </a>
        <a href="/data" className="action-card green">
          <div className="action-icon">
            <FontAwesomeIcon icon={faWifi} />
          </div>
          <p className="action-label">Buy Data</p>
        </a>
        <a href="/tv" className="action-card purple">
          <div className="action-icon">
            <FontAwesomeIcon icon={faTv} />
          </div>
          <p className="action-label">TV Subscription</p>
        </a>
        <a href="/electricity" className="action-card yellow">
          <div className="action-icon">
            <FontAwesomeIcon icon={faBolt} />
          </div>
          <p className="action-label">Electricity</p>
        </a>
        <a href="/flight" className="action-card indigo">
          <div className="action-icon">
            <FontAwesomeIcon icon={faPlane} />
          </div>
          <p className="action-label">Flight</p>
        </a>
        <a href="/betting" className="action-card red">
          <div className="action-icon">
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
          <p className="action-label">Betting</p>
        </a>
        <a href="/transactions" className="action-card gray">
          <div className="action-icon">
            <FontAwesomeIcon icon={faHistory} />
          </div>
          <p className="action-label">Transactions</p>
        </a>
        <a href="/fund-wallet" className="action-card emerald">
          <div className="action-icon">
            <FontAwesomeIcon icon={faWallet} />
          </div>
          <p className="action-label">Fund Wallet</p>
        </a>
      </div>
    </div>
  );
};

export default QuickActions;