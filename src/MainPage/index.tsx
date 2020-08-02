import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUserRepositories } from '../store/repositories/selectors'
import { loadUserRepositories } from '../store/repositories/actions'
import { History } from 'history'
import './MainPage.sass'

interface AppProps {
  history: History
}

const MainPage = ({ history }: AppProps) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState<string>('')
  const repositories = useSelector(getUserRepositories)

  const handleGetReposClick = () => {
    username && dispatch(loadUserRepositories(username))
  }

  useEffect(() => {
    if (repositories.length > 0) {
      history.push('/repositories')
    }
  })

  return (
    <div>
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
          onClick={handleGetReposClick}
        >
          Get Repositories
        </button>
      </div>
    </div>
  )
}
export default MainPage
