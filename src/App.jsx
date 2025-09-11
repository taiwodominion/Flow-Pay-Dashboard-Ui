import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Airtime from './pages/Airtime'
import Data from './pages/Data'
import TvSub from './pages/TvSub';
import './css/App.css';

function App() {
  return (
    <div className="dashboard-container">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/airtime' element={<Airtime />}></Route>
        <Route path='/data' element={<Data />} />
        <Route path='/tvsub' element={<TvSub />} />
      </Routes>
    </div>
  );
}

export default App;