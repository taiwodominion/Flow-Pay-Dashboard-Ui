import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import TransactionForm from '../components/TransactionForm'

const Transactions = () => {
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
          <TransactionForm />
        </main>
      </div>
    </div>
  )
}

export default Transactions