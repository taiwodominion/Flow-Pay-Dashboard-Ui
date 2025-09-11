import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import '../css/TvHead.css'

const TvHead = () => {
  return (
    <div className="tv-sub-header">
          <h1 className="tv-sub-title">
            <FontAwesomeIcon icon={faTv} className="tv-icon" />
            TV Subscription
          </h1>
          <p className="tv-sub-description">Subscribe to your favorite TV packages</p>
    </div>
  )
}

export default TvHead