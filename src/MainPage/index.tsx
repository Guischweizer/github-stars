import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUserRepositories } from '../store/repositories/selectors'
import { loadUserRepositories } from '../store/repositories/actions'

import './MainPage.sass'

const MainPage: React.FC = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState<string | null>(null)
  const repositories = useSelector(getUserRepositories)

  const handleGetReposClick = () => {
    username && dispatch(loadUserRepositories(username))
  }

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
        <button
          className="main-get-repositories-button"
          onClick={handleGetReposClick}
        >
          Get Repositories
        </button>
      </div>
    </div>
  )
}
export default MainPage
