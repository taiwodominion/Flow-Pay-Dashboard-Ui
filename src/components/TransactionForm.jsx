import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  // faArrowUpRightFromSquare, 
  // faArrowDownLeftAndPostit, // Alternative for inward arrow
  faArrowTrendUp,
  faArrowTrendDown,
  faDownload,
  faSearch,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import '../css/TransactionForm.css';

const TransactionForm = () => {
  const transactions = [
    {
      type: 'Airtime Purchase',
      details: '08012345678',
      reference: 'AIR_1234567890',
      amount: '₦1,000',
      status: 'completed',
      statusClass: 'success',
      date: '2024-01-15 14:30',
      icon: faArrowTrendUp,
      iconColor: 'destructive'
    },
    {
      type: 'Wallet Funding',
      details: 'Bank Transfer',
      reference: 'WAL_9876543210',
      amount: '+₦10,000',
      status: 'completed',
      statusClass: 'success',
      date: '2024-01-14 09:15',
      icon: faArrowTrendDown,
      iconColor: 'success'
    },
    {
      type: 'Data Purchase',
      details: '09087654321',
      reference: 'DAT_5678901234',
      amount: '₦2,500',
      status: 'pending',
      statusClass: 'pending',
      date: '2024-01-13 16:45',
      icon: faArrowTrendUp,
      iconColor: 'destructive'
    },
    {
      type: 'TV Subscription',
      details: 'DSTV Premium',
      reference: 'TV_3456789012',
      amount: '₦4,500',
      status: 'completed',
      statusClass: 'success',
      date: '2024-01-12 11:20',
      icon: faArrowTrendUp,
      iconColor: 'destructive'
    },
    {
      type: 'Electricity Bill',
      details: 'IKEDC - 123456789',
      reference: 'ELE_7890123456',
      amount: '₦3,000',
      status: 'failed',
      statusClass: 'failed',
      date: '2024-01-11 13:10',
      icon: faArrowTrendUp,
      iconColor: 'destructive'
    },
    {
      type: 'Flight Booking',
      details: 'Lagos to Abuja',
      reference: 'FLT_1357902468',
      amount: '₦75,000',
      status: 'completed',
      statusClass: 'success',
      date: '2024-01-10 08:00',
      icon: faArrowTrendUp,
      iconColor: 'destructive'
    },
    {
      type: 'Betting Funding',
      details: 'Bet9ja',
      reference: 'BET_2468013579',
      amount: '₦5,000',
      status: 'pending',
      statusClass: 'pending',
      date: '2024-01-09 19:30',
      icon: faArrowTrendUp,
      iconColor: 'destructive'
    }
  ];

  return (
    <div className="transactionsPage">
      <div className="transactionsHeader">
        <h1 className="transactionsTitle">Transaction History</h1>
        <button className="exportButton">
          <FontAwesomeIcon icon={faDownload} />
          Export
        </button>
      </div>
      
      <div className="filtersCard">
        <div className="cardHeader">
          <h3 className="cardTitle">Filters</h3>
        </div>
        <div className="cardContent">
          <div className="filtersGrid">
            <div className="searchContainer">
              <FontAwesomeIcon icon={faSearch} className="searchIcon" />
              <input 
                type="text" 
                placeholder="Search transactions..." 
                className="searchInput"
              />
            </div>
            <select className="filterSelect">
              <option value="">Transaction Type</option>
              <option value="airtime">Airtime</option>
              <option value="data">Data</option>
              <option value="funding">Wallet Funding</option>
            </select>
            <select className="filterSelect">
              <option value="">Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
            <select className="filterSelect">
              <option value="">Date Range</option>
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="transactionsCard">
        <div className="cardHeader">
          <h3 className="cardTitle">All Transactions</h3>
        </div>
        <div className="cardContent">
          <div className="transactionsList">
            {transactions.map((transaction, index) => (
              <div key={index} className="transactionItem">
                <div className="transactionInfo">
                  <div className={`transactionIcon ${transaction.iconColor}`}>
                    <FontAwesomeIcon icon={transaction.icon} />
                  </div>
                  <div className="transactionDetails">
                    <p className="transactionType">{transaction.type}</p>
                    <p className="transactionMeta">{transaction.details}</p>
                    <p className="transactionReference">Ref: {transaction.reference}</p>
                  </div>
                </div>
                <div className="transactionAmountContainer">
                  <p className={`transactionAmount ${transaction.iconColor === 'success' ? 'success' : ''}`}>
                    {transaction.amount}
                  </p>
                  <div className="transactionStatusContainer">
                    <span className={`statusBadge ${transaction.statusClass}`}>
                      {transaction.status}
                    </span>
                  </div>
                  <p className="transactionDate">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;