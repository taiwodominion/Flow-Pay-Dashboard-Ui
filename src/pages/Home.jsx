// src/pages/Home.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Wallet from '../components/Wallet';
import QuickActions from '../components/QuickActions';
import TransactionHistory from '../components/TransactionHistory';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="dashboard-main">
          <Wallet />
          <QuickActions />
          <TransactionHistory />
        </main>
      </div>
    </div>
  );
};

export default Home;