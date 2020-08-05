import React from 'react'
import './MainCard.sass'

interface MainCardProps {
  username: string
  setUsername: (username: string) => void
  getStarredRepositories: () => void
}

const MainCard = ({
  username,
  setUsername,
  getStarredRepositories,
}: MainCardProps) => {
  return (
    <div className="main-content">
      <h3 className="title">Github ✧</h3>
      <div className="username-input">
        <span>https://github.com/</span>
        <input
          placeholder="username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <button
        className="get-repositories-button"
        onClick={getStarredRepositories}
      >
        Get Repositories
      </button>
    </div>
  )
}

export default MainCard
