// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faBars,
//   faRightFromBracket,
//   faHome,
//   faMobileAlt,
//   faDatabase,
//   faTv,
//   faLightbulb,
//   faPlane,
//   faDice,
//   faWallet,
//   faHistory,
//   faUsers,
//   faHeadset,
// } from '@fortawesome/free-solid-svg-icons';
// import '../css/Sidebar.css';

// const Sidebar = () => {
//   const [isSidebarActive, setIsSidebarActive] = useState(false);

//   const handleMenuToggle = (e) => {
//     e.stopPropagation();
//     setIsSidebarActive(!isSidebarActive);
//   };

//   const handleCloseSidebar = () => {
//     setIsSidebarActive(false);
//   };

//   return (
//     <aside onClick={handleCloseSidebar}>
//       <div className="hamburger" onClick={handleMenuToggle}>
//         <FontAwesomeIcon icon={faBars} />
//       </div>

//       <div className={`sidebar ${isSidebarActive ? 'active' : 'none'}`} onClick={(e) => e.stopPropagation()}>
//         <div className="sidebar-content">
//           <div className="logo">
//             <h1>Nex <span>pay</span></h1>
//           </div>
//           <nav>
//             <ul>
//               <li className="active"><a href="/pages/index.html"><FontAwesomeIcon icon={faHome} /> <span>Dashboard</span></a></li>
//               <li><a href="/pages/airtime.html"><FontAwesomeIcon icon={faMobileAlt} /> <span>Airtime</span></a></li>
//               <li><a href="/pages/data.html"><FontAwesomeIcon icon={faDatabase} /><span>Data Bundles</span></a></li>
//               <li><a href="/pages/tv.html"><FontAwesomeIcon icon={faTv} /> <span>TV Subscriptions</span></a></li>
//               <li><a href="/pages/electricity.html"><FontAwesomeIcon icon={faLightbulb} /> <span>Electricity</span></a></li>
//               <li><a href="/pages/flight.html"><FontAwesomeIcon icon={faPlane} /> <span>Flight</span></a></li>
//               <li><a href="/pages/betting.html"><FontAwesomeIcon icon={faDice} /> <span>Betting</span></a></li>
//               <li><a href="/pages/wallet.html"><FontAwesomeIcon icon={faWallet} /> <span>Fund Wallet</span></a></li>
//               <li><a href="/pages/transactions.html"><FontAwesomeIcon icon={faHistory} /> <span>Transactions</span></a></li>
//               <li><a href="/pages/referrals.html"><FontAwesomeIcon icon={faUsers} /> <span>Referrals</span></a></li>
//               <li><a href="/pages/support.html"><FontAwesomeIcon icon={faHeadset} /> <span>Support</span></a></li>
//             </ul>
//           </nav>
//           <div className="sidebar-footer">
//             <a href="#" className="logout-btn"><FontAwesomeIcon icon={faRightFromBracket} /> <span>Logout</span></a>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;



// src/components/Sidebar.jsx
import React from 'react';
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
  const menuItems = [
    { label: 'Dashboard', href: '/', active: true },
    { label: 'Buy Airtime', href: '/airtime' },
    { label: 'Buy Data', href: '/data' },
    { label: 'TV Subscription', href: '/tv' },
    { label: 'Electricity', href: '/electricity' },
    { label: 'Flight', href: '/flight' },
    { label: 'Betting', href: '/betting' },
    { label: 'Transactions', href: '/transactions' },
    { label: 'Fund Wallet', href: '/fund-wallet' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <button className="sidebar-toggle">
          <FontAwesomeIcon icon={faChevronLeft} className="nav-icon" />
        </button>
      </div>
      <nav className="sidebar-nav">
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
    </aside>
  );
};

export default Sidebar;