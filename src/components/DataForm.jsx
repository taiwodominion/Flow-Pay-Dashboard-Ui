import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faWifi } from "@fortawesome/free-solid-svg-icons";
import '../css/DataForm.css'

const DataForm = () => {
    const plans = [
    { plan: "500MB - 30 Days", price: "₦500" },
    { plan: "1GB - 30 Days", price: "₦1,000" },
    { plan: "2GB - 30 Days", price: "₦2,000" },
    { plan: "5GB - 30 Days", price: "₦4,500" },
    { plan: "10GB - 30 Days", price: "₦8,000" },
    { plan: "20GB - 30 Days", price: "₦15,000" },
  ];
  return (
    <div className="data-form-wrapper">
        <div className="data-card">
          <div className="data-card-header">
            <div className="header-info">
                <FontAwesomeIcon icon={faWifi} className="title-icon" />
                <h3 className="card-title">Data Purchase</h3>
            </div>
          </div>

          <div className="card-content">
            <div className="form-group">
              <label htmlFor="network">Select Network</label>
              <button type="button" className="select-btn">
                <span>Choose network</span>
                <FontAwesomeIcon icon={faChevronDown} className="chevron" />
              </button>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="08012345678"
                className="input"
              />
            </div>

            <div className="form-group">
              <label>Select Data Plan</label>
              <div className="plans-grid">
                {plans.map((item, idx) => (
                  <div key={idx} className="plan-card">
                    <p className="plan-text">{item.plan}</p>
                    <p className="plan-price">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="btn-wrapper">
              <button className="btn-primary">Purchase Data Now</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DataForm;