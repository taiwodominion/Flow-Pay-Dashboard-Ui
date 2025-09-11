import React from 'react';
import './RecentTransactions.css';

const transactions = [
  { network: 'mtn', phone: '0813****456', amount: 1000, status: 'success' },
  { network: 'airtel', phone: '0802****789', amount: 500, status: 'success' },
  { network: 'glo', phone: '0805****123', amount: 2000, status: 'pending' }
];

const RecentTransactions = () => {
  return (
    <div className="recent-transactions">
      <h3><i className="fas fa-history"></i> Recent Airtime Purchases</h3>
      <div className="transaction-list">
        {transactions.map((tx, index) => (
          <div className="transaction-item" key={index}>
            <div className="transaction-details">
              <span className={`network-badge ${tx.network}`}>{tx.network.toUpperCase()}</span>
              <span className="phone">{tx.phone}</span>
            </div>
            <div className="transaction-amount">₦{tx.amount.toLocaleString()}</div>
            <div className={`transaction-status ${tx.status}`}>{tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}</div>
          </div>
        ))}
      </div>
      <a href="/pages/transactions.html" className="view-all">View All Airtime Transactions</a>
    </div>
  );
};

export default RecentTransactions;
