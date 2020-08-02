import React from 'react'

import './loader.sass'

const Loader = () => (
  <div className="container">
    <div className="loader" id="loader">
      <span>✧</span>
      <span>✧</span>
      <span>✧</span>
    </div>
    <h3 className="message">Getting the repositories list from Github</h3>
  </div>
)

export default Loader
