import React from 'react'
// import Sidebar from '../components/Sidebar'
// import Header from '../components/Header'
import HelpContent from '../components/HelpContent'

const Help = () => {
  return (
    <div className="dashboard-layout">
      {/* <aside>
        <Sidebar />
      </aside> */}
        {/* <header>
          <Header />
        </header> */}
        <main className="dashboard-main">
            <HelpContent />
        </main>
    </div>
  )
}

export default Help