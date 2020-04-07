import React from 'react'

import './loader.sass'

const Loader = () => (
  <div>
    <h2 className="main-title">GitHub Stars</h2>
    <div className="loader">
      <div className="loading-animation">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h4>Getting the repositories list from Github...</h4>
    </div>
  </div>
)

export default Loader
