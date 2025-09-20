import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import BettingContent from '../components/BettingContent'

const Betting = () => {
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
          <BettingContent />
        </main>
      </div>
    </div>
  )
}

export default Betting