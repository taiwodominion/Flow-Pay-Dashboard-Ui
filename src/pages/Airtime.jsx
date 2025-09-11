import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import AirtimeForm from '../components/AirtimeForm'

const Airtime = () => {
    return (
        // <div>
        //     <Sidebar />
        //     <Header />
        //     <AirtimeForm />
        // </div>
        <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="dashboard-main">
          <AirtimeForm />
        </main>
      </div>
    </div>
    )
}

export default Airtime;