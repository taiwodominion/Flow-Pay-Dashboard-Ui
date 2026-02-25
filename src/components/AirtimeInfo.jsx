import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../css/AirtimeInfo.css';

const AirtimeInfo = () => {
  return (
    <div className="airtime-info">
      <div className="info-card">
        <div className="info-card-header">
          <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
          <h3>Airtime Purchase Info</h3>
        </div>
        <ul className="info-list">
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
            <span>Minimum purchase: <strong>₦50</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
            <span>Maximum purchase: <strong>₦50,000</strong></span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
            <span>Transactions are instant</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
            <span>Zero service charges</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
            <span>24/7 service availability</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AirtimeInfo;