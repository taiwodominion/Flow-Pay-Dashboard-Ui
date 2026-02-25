import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMobileScreen, 
  faWifi, 
  faTv, 
  faBolt, 
  faWallet, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';
import '../css/TransactionHistory.css'

const TransactionHistory = () => {
  return (
    <div className="transaction-history">
      <div className="transaction-header">
        <div className="title-group">
          <h3 className="transaction-title">Recent Transactions</h3>
          <p className="transaction-subtitle">Your latest financial activities</p>
        </div>
        <button className="view-all-btn">
          View All <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
        </button>
      </div>
      <div className="transaction-content">
        <div className="transaction-list">
          
          <div className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-icon destructive">
                <FontAwesomeIcon icon={faMobileScreen} />
              </div>
              <div className="transaction-details">
                <h4>Airtime Purchase</h4>
                <p>08012345678</p>
              </div>
            </div>
            <div className="transaction-amount">
              <p className="amount destructive">-₦1,000.00</p>
              <div className="transaction-meta">
                <span className="status-badge success">Completed</span>
                <span className="transaction-date">Jan 15, 2026</span>
              </div>
            </div>
          </div>

          <div className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-icon success">
                <FontAwesomeIcon icon={faWallet} />
              </div>
              <div className="transaction-details">
                <h4>Wallet Funding</h4>
                <p>Bank Transfer</p>
              </div>
            </div>
            <div className="transaction-amount">
              <p className="amount success">+₦10,000.00</p>
              <div className="transaction-meta">
                <span className="status-badge success">Completed</span>
                <span className="transaction-date">Jan 14, 2026</span>
              </div>
            </div>
          </div>

          <div className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-icon destructive">
                <FontAwesomeIcon icon={faWifi} />
              </div>
              <div className="transaction-details">
                <h4>Data Purchase</h4>
                <p>09087654321</p>
              </div>
            </div>
            <div className="transaction-amount">
              <p className="amount destructive">-₦2,500.00</p>
              <div className="transaction-meta">
                <span className="status-badge warning">Pending</span>
                <span className="transaction-date">Jan 13, 2026</span>
              </div>
            </div>
          </div>

          <div className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-icon destructive">
                <FontAwesomeIcon icon={faTv} />
              </div>
              <div className="transaction-details">
                <h4>TV Subscription</h4>
                <p>DSTV Premium</p>
              </div>
            </div>
            <div className="transaction-amount">
              <p className="amount destructive">-₦4,500.00</p>
              <div className="transaction-meta">
                <span className="status-badge success">Completed</span>
                <span className="transaction-date">Jan 12, 2026</span>
              </div>
            </div>
          </div>

          <div className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-icon destructive">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <div className="transaction-details">
                <h4>Electricity Bill</h4>
                <p>IKEDC Postpaid</p>
              </div>
            </div>
            <div className="transaction-amount">
              <p className="amount destructive">-₦3,000.00</p>
              <div className="transaction-meta">
                <span className="status-badge destructive">Failed</span>
                <span className="transaction-date">Jan 11, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;