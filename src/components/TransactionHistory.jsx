// src/components/TransactionHistory.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpRight, faArrowDownRight, faEye } from '@fortawesome/free-solid-svg-icons';
import '../css/TransactionHistory.css'

const TransactionHistory = () => {
  return (
    <div className="transaction-history">
      <div className="transaction-header">
        <h3 className="transaction-title">Recent Transactions</h3>
        <button className="view-all-btn">
          {/* <FontAwesomeIcon icon={faEye} /> */}
          View All
        </button>
      </div>
      <div className="transaction-content">
        <div className="transaction-list">
          {/* Airtime Purchase */}
          <div className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-icon destructive">
                {/* <FontAwesomeIcon icon={faArrowUpRight} /> */}
              </div>
              <div className="transaction-details">
                <h4>Airtime Purchase</h4>
                <p>08012345678</p>
              </div>
            </div>
            <div className="transaction-amount">
              <p className="amount destructive">₦1,000</p>
              <div className="transaction-meta">
                <span className="status-badge success">completed</span>
                <span className="transaction-date">2024-01-15</span>
              </div>
            </div>
          </div>

          {/* Wallet Funding */}
          <div className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-icon success">
                {/* <FontAwesomeIcon icon={faArrowDownRight} /> */}
              </div>
              <div className="transaction-details">
                <h4>Wallet Funding</h4>
                <p>Bank Transfer</p>
              </div>
            </div>
            <div className="transaction-amount">
              <p className="amount success">+₦10,000</p>
              <div className="transaction-meta">
                <span className="status-badge success">completed</span>
                <span className="transaction-date">2024-01-14</span>
              </div>
            </div>
          </div>

          {/* Data Purchase */}
          <div className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-icon destructive">
                {/* <FontAwesomeIcon icon={faArrowUpRight} /> */}
              </div>
              <div className="transaction-details">
                <h4>Data Purchase</h4>
                <p>09087654321</p>
              </div>
            </div>
            <div className="transaction-amount">
              <p className="amount destructive">₦2,500</p>
              <div className="transaction-meta">
                <span className="status-badge warning">pending</span>
                <span className="transaction-date">2024-01-13</span>
              </div>
            </div>
          </div>

          {/* TV Subscription */}
          <div className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-icon destructive">
                {/* <FontAwesomeIcon icon={faArrowUpRight} /> */}
              </div>
              <div className="transaction-details">
                <h4>TV Subscription</h4>
                <p>DSTV Premium</p>
              </div>
            </div>
            <div className="transaction-amount">
              <p className="amount destructive">₦4,500</p>
              <div className="transaction-meta">
                <span className="status-badge success">completed</span>
                <span className="transaction-date">2024-01-12</span>
              </div>
            </div>
          </div>

          {/* Electricity Bill */}
          <div className="transaction-item">
            <div className="transaction-info">
              <div className="transaction-icon destructive">
                {/* <FontAwesomeIcon icon={faArrowUpRight} /> */}
              </div>
              <div className="transaction-details">
                <h4>Electricity Bill</h4>
                <p>IKEDC</p>
              </div>
            </div>
            <div className="transaction-amount">
              <p className="amount destructive">₦3,000</p>
              <div className="transaction-meta">
                <span className="status-badge destructive">failed</span>
                <span className="transaction-date">2024-01-11</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;