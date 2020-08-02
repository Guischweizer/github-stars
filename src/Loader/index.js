import React from 'react'

import './loader.sass'

const Loader = () => (
  <div className="loader">
    <div className="loading-animation">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h4>Getting the repositories list from Github...</h4>
  </div>
)

export default Loader
