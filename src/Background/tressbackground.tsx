import React from 'react'
import './TreesBackground.sass'

const TressBackground = () => {
  return (
    <div className="scene">
      <div className="sky">
        <div className="sun" />
        <div className="clouds">
          <div className="cloud" />
          <div className="cloud" />
          <div className="cloud" />
        </div>
      </div>
      <div className="tree rounded">
        <div className="leaves" />
        <div className="branches">
          <div className="trunk" />
          <div className="branch" />
          <div className="branch" />
          <div className="branch" />
        </div>
      </div>
      <div className="tree pointed">
        <div className="leaves">
          <div className="leaf" />
          <div className="leaf" />
          <div className="leaf" />
        </div>
        <div className="branches">
          <div className="trunk" />
          <div className="branch" />
          <div className="branch" />
          <div className="branch" />
        </div>
      </div>
      <div className="tree rounded">
        <div className="leaves">
          <div className="leaf" />
          <div className="leaf" />
          <div className="leaf" />
        </div>
        <div className="branches">
          <div className="trunk" />
          <div className="branch" />
          <div className="branch" />
          <div className="branch" />
        </div>
      </div>
    </div>
  )
}

export default TressBackground
