import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faRightFromBracket,
  faHome,
  faMobileAlt,
  faDatabase,
  faTv,
  faLightbulb,
  faPlane,
  faDice,
  faWallet,
  faHistory,
  faUsers,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div>
      <aside className="sidebar">
        <div className="menu-toggle">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="logo">
          <h1>
            Flow<span>Pay</span>
          </h1>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active">
              <a href="/pages/index.html">
                <FontAwesomeIcon icon={faHome} /> Dashboard
              </a>
            </li>
            <li>
              <a href="/pages/airtime.html">
                <FontAwesomeIcon icon={faMobileAlt} /> Airtime
              </a>
            </li>
            <li>
              <a href="/pages/data.html">
                <FontAwesomeIcon icon={faDatabase} /> Data Bundles
              </a>
            </li>
            <li>
              <a href="/pages/tv.html">
                <FontAwesomeIcon icon={faTv} /> TV Subscriptions
              </a>
            </li>
            <li>
              <a href="/pages/electricity.html">
                <FontAwesomeIcon icon={faLightbulb} /> Electricity
              </a>
            </li>
            <li>
              <a href="/pages/flight.html">
                <FontAwesomeIcon icon={faPlane} /> Flight
              </a>
            </li>
            <li>
              <a href="/pages/betting.html">
                <FontAwesomeIcon icon={faDice} /> Betting
              </a>
            </li>
            <li>
              <a href="/pages/wallet.html">
                <FontAwesomeIcon icon={faWallet} /> Fund Wallet
              </a>
            </li>
            <li>
              <a href="/pages/transactions.html">
                <FontAwesomeIcon icon={faHistory} /> Transactions
              </a>
            </li>
            <li>
              <a href="/pages/referrals.html">
                <FontAwesomeIcon icon={faUsers} /> Referrals
              </a>
            </li>
            <li>
              <a href="/pages/support.html">
                <FontAwesomeIcon icon={faHeadset} /> Support
              </a>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={() => console.log('Logout clicked')}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Logout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
