import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../css/TvForm.css';

const TvForm = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [smartCardNumber, setSmartCardNumber] = useState('');

  const tvPackages = [
    { id: 1, name: "DSTV Padi", channels: "40+ channels", duration: "30 Days", price: "₦2,150" },
    { id: 2, name: "DSTV Yanga", channels: "60+ channels", duration: "30 Days", price: "₦2,950" },
    { id: 3, name: "DSTV Confam", channels: "75+ channels", duration: "30 Days", price: "₦5,300" },
    { id: 4, name: "DSTV Premium", channels: "150+ channels", duration: "30 Days", price: "₦24,500" },
    { id: 5, name: "GOtv Supa", channels: "65+ channels", duration: "30 Days", price: "₦4,850" },
    { id: 6, name: "StarTimes Basic", channels: "35+ channels", duration: "30 Days", price: "₦1,300" }
  ];

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg.id === selectedPackage ? null : pkg.id);
  };

  return (
    <main className="tv-sub-main">
      <div className="tv-sub-container">
        
        <div className="tv-sub-card">
          <div className="card-header">
            <h3 className="card-title">TV Subscription</h3>
          </div>
          
          <div className="card-content">
            <div className="form-group">
              <label htmlFor="provider" className="form-label">Select Provider</label>
              <div className="select-container">
                <select id="provider" className="form-select">
                  <option value="">Choose TV provider</option>
                  <option value="dstv">DSTV</option>
                  <option value="gotv">GOtv</option>
                  <option value="startimes">StarTimes</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="select-arrow" />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="smartcard" className="form-label">Smart Card Number</label>
              <input
                type="text"
                id="smartcard"
                className="form-input"
                placeholder="Enter smart card number"
                value={smartCardNumber}
                onChange={(e) => setSmartCardNumber(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Select Package</label>
              <div className="packages-grid">
                {tvPackages.map(pkg => (
                  <div 
                    key={pkg.id}
                    className={`package-card ${selectedPackage === pkg.id ? 'selected' : ''}`}
                    onClick={() => handlePackageSelect(pkg)}
                  >
                    <div className="package-content">
                      <div className="package-info">
                        <p className="package-name">{pkg.name}</p>
                        <p className="package-details">{pkg.channels} • {pkg.duration}</p>
                      </div>
                      <div className="package-price">
                        <p className="price">{pkg.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="subscribe-button-container">
              <button className="subscribe-button">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TvForm;