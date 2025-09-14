import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import FlightBooking from '../components/FlightBooking'

const Flight = () => {
  return (
    <div className="dashboard-layout">
      <aside>
        <Sidebar />
      </aside>
      <div className="main-content">
        <header>
          <Header />
        </header>
        <main className="dashboard-main">
          <FlightBooking />
        </main>
      </div>
    </div>
  )
}

export default Flight