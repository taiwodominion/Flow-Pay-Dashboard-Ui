
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DataHead from "../components/DataHead";
import DataForm from "../components/DataForm";
import "../css/Data.css";

const Data = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="dashboard-main">
          <DataHead />
          <DataForm />
        </main>
      </div>
    </div>
  );
}

export default Data;