import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import SettingsForm from '../components/SettingsForm'

const Settings = () => {
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
            <SettingsForm />
        </main>
      </div>
    </div>
  )
}

export default Settings