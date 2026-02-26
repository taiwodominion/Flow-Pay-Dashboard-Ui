import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faChevronDown, faCalendarAlt, faExchangeAlt, faUsers, faCrown } from '@fortawesome/free-solid-svg-icons';
import '../css/FlightBooking.css';

const FlightBooking = () => {
  const [activeTab, setActiveTab] = useState('Round Trip');
  
  const popularRoutes = [
    { from: 'Lagos', to: 'Abuja', price: '₦85,000' },
    { from: 'Lagos', to: 'Kano', price: '₦95,000' },
    { from: 'Abuja', to: 'Port Harcourt', price: '₦75,000' },
    { from: 'Lagos', to: 'Calabar', price: '₦90,000' },
  ];

  return (
    <div className="flight-container">
      <div className="flight-header">
        <h1>
          <FontAwesomeIcon icon={faPlane} className="header-plane-icon" />
          Flight Booking
        </h1>
        <p>Book domestic and international flights effortlessly</p>
      </div>

      <div className="flight-card main-search">
        <div className="card-header">
          <h3 className="card-title">Search Flights</h3>
        </div>
        <div className="card-content">
          <div className="trip-type-selector">
            {['Round Trip', 'One Way', 'Multi City'].map((tab) => (
              <button 
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>From</label>
              <div className="select-wrapper">
                <select>
                  <option value="">Select departure city</option>
                  <option value="lagos">Lagos (LOS)</option>
                  <option value="abuja">Abuja (ABV)</option>
                  <option value="kano">Kano (KAN)</option>
                  <option value="port-harcourt">Port Harcourt (PHC)</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="select-arrow" />
              </div>
            </div>

            <div className="form-group">
              <label>To</label>
              <div className="select-wrapper">
                <select>
                  <option value="">Select destination city</option>
                  <option value="lagos">Lagos (LOS)</option>
                  <option value="abuja">Abuja (ABV)</option>
                  <option value="kano">Kano (KAN)</option>
                  <option value="port-harcourt">Port Harcourt (PHC)</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="select-arrow" />
              </div>
            </div>

            <div className="form-group">
              <label>Departure Date</label>
              <div className="date-input">
                <input type="date" />
                <FontAwesomeIcon icon={faCalendarAlt} className="input-icon" />
              </div>
            </div>

            <div className="form-group">
              <label>Return Date</label>
              <div className="date-input">
                <input type="date" disabled={activeTab === 'One Way'} />
                <FontAwesomeIcon icon={faCalendarAlt} className="input-icon" />
              </div>
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faUsers} /> Passengers</label>
              <div className="select-wrapper">
                <select>
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4+ Passengers</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="select-arrow" />
              </div>
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faCrown} /> Cabin Class</label>
              <div className="select-wrapper">
                <select>
                  <option value="economy">Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First Class</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="select-arrow" />
              </div>
            </div>
          </div>

          <div className="search-btn-container">
            <button className="search-btn">
              <FontAwesomeIcon icon={faPlane} />
              Search Available Flights
            </button>
          </div>
        </div>
      </div>

      <div className="flight-card">
        <div className="card-header">
          <h3 className="card-title">Popular Routes</h3>
        </div>
        <div className="card-content popular-section">
          <div className="routes-grid">
            {popularRoutes.map((route, index) => (
              <div key={index} className="route-card">
                <div className="route-info">
                  <div className="cities">
                    <span className="city-name">{route.from}</span>
                    <FontAwesomeIcon icon={faExchangeAlt} className="route-icon" />
                    <span className="city-name">{route.to}</span>
                  </div>
                  <span className="route-price">{route.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;