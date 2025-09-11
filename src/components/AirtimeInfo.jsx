import React from 'react';
import './AirtimeInfo.css';

const AirtimeInfo = () => {
  return (
    <div className="airtime-info">
      <div className="info-card">
        <h3><i className="fas fa-info-circle"></i> Airtime Purchase Info</h3>
        <ul>
          <li>Minimum purchase: ₦50</li>
          <li>Maximum purchase: ₦50,000</li>
          <li>Transactions are instant</li>
          <li>No hidden charges</li>
          <li>24/7 service availability</li>
        </ul>
      </div>
    </div>
  );
};

export default AirtimeInfo;
