import React from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TvForm from '../components/TvForm';

const TvSub = () => {
  return (
   <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="dashboard-main">
          <TvForm />
        </main>
      </div>
    </div>
  )
}

export default TvSub