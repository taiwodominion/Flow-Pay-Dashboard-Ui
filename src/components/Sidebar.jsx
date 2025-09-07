import React from 'react';
import { useState } from 'react'
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
import '../css/Sidebar.css'

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sidebarLink, setSidebarLink] = useState(false)

  const toggleSidebar = () => {
    setMobileMenu(!mobileMenu);
  }

  const clickSidebarLink = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSidebarLink('active');
  }

  // const closeSidebar = () => {
  //   setMobileMenu(false)
  // }

  // const menuItems = [
  //   { label: 'Dashboard', href: '/', active: true },
  //   { label: 'Buy Airtime', href: '/airtime' },
  //   { label: 'Buy Data', href: '/data' },
  //   { label: 'TV Subscription', href: '/tv' },
  //   { label: 'Electricity', href: '/electricity' },
  //   { label: 'Flight', href: '/flight' },
  //   { label: 'Betting', href: '/betting' },
  //   { label: 'Transactions', href: '/transactions' },
  //   { label: 'Fund Wallet', href: '/fund-wallet' }
  // ];

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
      <nav className="sidebar-nav" onClick={clickSidebarLink}>
        <a href="/" className="nav-item active">
          <FontAwesomeIcon icon={faHouse} className="nav-icon" />
          <span className="nav-label">Dashboard</span>
        </a>
        <a href="/airtime" className="nav-item">
          <FontAwesomeIcon icon={faPhone} className="nav-icon" />
          <span className="nav-label">Buy Airtime</span>
        </a>
        <a href="/data" className="nav-item">
          <FontAwesomeIcon icon={faWifi} className="nav-icon" />
          <span className="nav-label">Buy Data</span>
        </a>
        <a href="/tv" className="nav-item">
          <FontAwesomeIcon icon={faTv} className="nav-icon" />
          <span className="nav-label">TV Subscription</span>
        </a>
        <a href="/electricity" className="nav-item">
          <FontAwesomeIcon icon={faBolt} className="nav-icon" />
          <span className="nav-label">Electricity</span>
        </a>
        <a href="/flight" className="nav-item">
          <FontAwesomeIcon icon={faPlane} className="nav-icon" />
          <span className="nav-label">Flight</span>
        </a>
        <a href="/betting" className="nav-item">
          <FontAwesomeIcon icon={faDollarSign} className="nav-icon" />
          <span className="nav-label">Betting</span>
        </a>
        <a href="/transactions" className="nav-item">
          <FontAwesomeIcon icon={faHistory} className="nav-icon" />
          <span className="nav-label">Transactions</span>
        </a>
        <a href="/fund-wallet" className="nav-item">
          <FontAwesomeIcon icon={faWallet} className="nav-icon" />
          <span className="nav-label">Fund Wallet</span>
        </a>
      </nav>
      </div>
    </aside>
  );
};

export default Sidebar;