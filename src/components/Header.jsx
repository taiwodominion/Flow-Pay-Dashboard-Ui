// import React from "react";
// import { Link } from "react-router-dom";
// import userImage from "../assets/my_animated_pic.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faArrowDown, faBell } from "@fortawesome/free-solid-svg-icons";
// import "../css/Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="user-profile">
//         <img src={userImage} alt="User" />
//         <span>Taiwo Dominion</span>
//         <FontAwesomeIcon icon={faArrowDown} />
//       </div>
//       <div className="dropdown-menu">
//         <Link to="/">
//           <FontAwesomeIcon icon={faUser} />
//           Profile
//         </Link>
//         <Link to="/">
//           <FontAwesomeIcon icon={faUser} />
//           Settings
//         </Link>
//         <Link to="/">
//           <FontAwesomeIcon icon={faUser} />
//           Help
//         </Link>
//         <Link to="/">
//           <FontAwesomeIcon icon={faUser} />
//           Logout
//         </Link>
//       </div>
//       <div className="notification-bell">
//         <FontAwesomeIcon icon={faBell} />
//         <span className="badge">3</span>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userImage from '../assets/my_animated_pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faArrowDown,
  faBell,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
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
    <header className="header">
      <div className="user-profile" onClick={toggleDropdown}>
        <img src={userImage} alt="User" />
        <span>Taiwo Dominion</span>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>

      {showDropdown && (
        <div className="dropdown-menu">
          <Link to="/"><FontAwesomeIcon icon={faUser} /> Profile</Link>
          <Link to="/"><FontAwesomeIcon icon={faCog} /> Settings</Link>
          <Link to="/"><FontAwesomeIcon icon={faQuestionCircle} /> Help</Link>
          <Link to="/"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
        </div>
      )}

      <div className="notification-bell">
        <FontAwesomeIcon icon={faBell} />
        <span className="badge">3</span>
      </div>
    </header>
  );
};

export default Header;
