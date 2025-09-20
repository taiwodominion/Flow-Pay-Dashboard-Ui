import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Airtime from './pages/Airtime'
import Data from './pages/Data'
import TvSub from './pages/TvSub';
import Electricity from './pages/Electricity';
import Flight from './pages/Flight';
import Betting from './pages/Betting';
import Transactions from './pages/Transactions';
import FundWallet from './pages/FundWallet';
import './css/App.css';

function App() {
  return (
    <div className="dashboard-container">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/airtime' element={<Airtime />} />
        <Route path='/data' element={<Data />} />
        <Route path='/tvsub' element={<TvSub />} />
        <Route path='/electricity' element={<Electricity />} />
        <Route path='/flight' element={<Flight />} />
        <Route path='/betting' element={<Betting />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/fund-wallet' element={<FundWallet />} />
      </Routes>
    </div>
  );
}

export default App;