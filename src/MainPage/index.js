import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  getUserRepositories,
  getIsFetching,
} from '../store/repositories/selectors'
import { loadUserRepositories } from '../store/repositories/actions'

import './MainPage.sass'

const MainPage = ({ history }) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState(null)
  const repositories = useSelector(getUserRepositories)
  const isLoading = useSelector(getIsFetching)

  const handleGetReposClick = async () => {
    username && (await dispatch(loadUserRepositories(username)))
    if (repositories.length > 0 && !isLoading) {
      history.push('/repositories')
    }
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
