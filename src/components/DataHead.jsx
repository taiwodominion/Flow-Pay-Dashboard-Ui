import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import '../css/DataHead.css'

const DataHead = () => {
  return (
    <div>
      <div className="header">
        <h1 className="title">
          <FontAwesomeIcon icon={faWifi} className="wifi-icon" />
          Buy Data
        </h1>
        <p className="subtitle">Purchase data plans for any network</p>
      </div>
    </div>
  );
};

export default DataHead;
