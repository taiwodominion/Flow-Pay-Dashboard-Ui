import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faPhone,
  faWifi,
  faTv,
  faBolt,
  faPlane,
  faDollarSign,
  faHistory,
  faWallet,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import displayPic from "../assets/my_animated_pic.jpg";
import '../css/Sidebar.css';

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleSidebar = () => {
    setMobileMenu(!mobileMenu);
  };

  const navItems = [
    { label: 'Dashboard', to: '/', icon: faHouse },
    { label: 'Buy Airtime', to: '/airtime', icon: faPhone },
    { label: 'Buy Data', to: '/data', icon: faWifi },
    { label: 'TV Subscription', to: '/tvsub', icon: faTv },
    { label: 'Electricity', to: '/electricity', icon: faBolt },
    { label: 'Flight', to: '/flight', icon: faPlane },
    { label: 'Betting', to: '/betting', icon: faDollarSign },
    { label: 'Transactions', to: '/transactions', icon: faHistory },
    { label: 'Fund Wallet', to: '/fund-wallet', icon: faWallet },
    { label: 'Settings', to: '/settings', icon: faTools },
  ];

  return (
    <aside>
      <button 
        className={`sidebar-toggle ${mobileMenu ? 'open' : ''}`} 
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </button>

      {mobileMenu && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      <div className={`sidebar ${mobileMenu ? 'sidebar-active' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon">F</div>
            <h1 className="logo-text">Flow<span>Pay</span></h1>
          </div>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-section-label">Main Menu</p>
          {navItems.map(({ label, to, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'active' : ''}`
              }
              onClick={() => setMobileMenu(false)}
            >
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={icon} className="nav-icon" />
              </div>
              <span className="nav-label">{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
           <div className="user-avatar">TD</div>
           <div className="user-info">
              <p className="user-name">Taiwo Dominion</p>
              <p className="user-status">Verified Account</p>
           </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;