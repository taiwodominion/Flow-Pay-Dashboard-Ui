import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userImage from '../assets/my_animated_pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faChevronDown,
  faBell,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import '../css/Header.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = () => setShowDropdown(false);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='head-div'>
      <div className="header">
        <div className="header-left-section">
          <div className="mobile-ham-spacer"></div>
          <div className="header-search">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search transactions..." />
          </div>
        </div>

        <div className="header-right">
          <div className="notification-bell">
            <FontAwesomeIcon icon={faBell} />
            <span className="badge">3</span>
          </div>

          <div className="user-profile-wrapper">
            <div className="user-profile" onClick={toggleDropdown}>
              <div className="avatar-container">
                <img src={userImage} alt="User" />
                <div className="status-indicator"></div>
              </div>
              <div className="user-details">
                <span className="user-name">Taiwo Dominion</span>
                <span className="user-role">Premium Account</span>
              </div>
              <FontAwesomeIcon icon={faChevronDown} className={`arrow-icon ${showDropdown ? 'rotate' : ''}`} />
            </div>

            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                   <p>Account Settings</p>
                </div>
                <Link to="/settings"><FontAwesomeIcon icon={faUser} /> Profile</Link>
                <Link to="/settings"><FontAwesomeIcon icon={faCog} /> Settings</Link>
                <Link to="/help"><FontAwesomeIcon icon={faQuestionCircle} /> Help Center</Link>
                <hr />
                <Link to="/" className="logout-link"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;