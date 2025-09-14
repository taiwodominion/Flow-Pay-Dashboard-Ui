import React, { useState } from 'react';
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
          <i className="fas fa-plane"></i>
          Flight Booking
        </h1>
        <p>Book domestic and international flights</p>
      </div>

      {/* Search Card */}
      <div className="card">
        <div className="card-header">
          <h3>Search Flights</h3>
        </div>
        <div className="card-content">
          <div className="trip-type-selector">
            <button 
              className={`tab-btn ${activeTab === 'Round Trip' ? 'active' : ''}`}
              onClick={() => setActiveTab('Round Trip')}
            >
              Round Trip
            </button>
            <button 
              className={`tab-btn ${activeTab === 'One Way' ? 'active' : ''}`}
              onClick={() => setActiveTab('One Way')}
            >
              One Way
            </button>
            <button 
              className={`tab-btn ${activeTab === 'Multi City' ? 'active' : ''}`}
              onClick={() => setActiveTab('Multi City')}
            >
              Multi City
            </button>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>From</label>
              <div className="select-wrapper">
                <select>
                  <option value="">Select departure city</option>
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                  <option value="kano">Kano</option>
                  <option value="port-harcourt">Port Harcourt</option>
                </select>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>

            <div className="form-group">
              <label>To</label>
              <div className="select-wrapper">
                <select>
                  <option value="">Select destination city</option>
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                  <option value="kano">Kano</option>
                  <option value="port-harcourt">Port Harcourt</option>
                </select>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>

            <div className="form-group">
              <label>Departure Date</label>
              <div className="date-input">
                <input type="date" />
                <i className="fas fa-calendar"></i>
              </div>
            </div>

            <div className="form-group">
              <label>Return Date</label>
              <div className="date-input">
                <input type="date" />
                <i className="fas fa-calendar"></i>
              </div>
            </div>

            <div className="form-group">
              <label>Passengers</label>
              <div className="select-wrapper">
                <select>
                  <option value="">Select passengers</option>
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                </select>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>

            <div className="form-group">
              <label>Class</label>
              <div className="select-wrapper">
                <select>
                  <option value="">Select class</option>
                  <option value="economy">Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First Class</option>
                </select>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>

          <div className="search-btn-container">
            <button className="search-btn">
              <i className="fas fa-plane"></i>
              Search Flights
            </button>
          </div>
        </div>
      </div>

      {/* Popular Routes Card */}
      <div className="card">
        <div className="card-header">
          <h3>Popular Routes</h3>
        </div>
        <div className="card-content">
          <div className="routes-grid">
            {popularRoutes.map((route, index) => (
              <div key={index} className="route-card">
                <div className="route-info">
                  <div className="cities">
                    <span>{route.from}</span>
                    <i className="fas fa-arrow-left-right"></i>
                    <span>{route.to}</span>
                  </div>
                  <span className="price">{route.price}</span>
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