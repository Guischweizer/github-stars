import React, { useState } from 'react'
import './MainPage.sass'

const MainPage = () => {
  const [username, setUsername] = useState<string | null>(null)

  return (
    <div>
      <h2 className="main-title">GitHub Stars</h2>
      <div className="main-content">
        <div className="main-username-input">
          <span>https://github.com/</span>
          <input
            placeholder="username"
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <button className="main-get-repositories-button">
          Get Repositories
        </button>
      </div>
    </div>
  )
}
export default MainPage
