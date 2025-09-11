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
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
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
  ];

  return (
    <aside>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faChevronLeft} className="nav-icon" />
      </button>

      <div className={`sidebar ${mobileMenu ? 'sidebar-active' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <h1>Flow-Pay</h1>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(({ label, to, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <FontAwesomeIcon icon={icon} className="nav-icon" />
              <span className="nav-label">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
