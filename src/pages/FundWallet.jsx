import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import FundWalletForm from '../components/FundWalletForm'

const FundWallet = () => {
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
          <FundWalletForm />
        </main>
      </div>
    </div>
  )
}

export default FundWallet