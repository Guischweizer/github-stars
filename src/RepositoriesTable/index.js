import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserRepositories } from '../store/repositories/selectors'
import './TableStyle/table.css'
import './TableStyle/table.sass'
import { cleanStorage } from '../store/repositories/actions'

const RepositoriesTable = ({ history }) => {
  const dispatch = useDispatch()
  const repositories = useSelector(getUserRepositories)

  useEffect(() => {
    if (repositories.length === 0) {
      history.push('/')
    }
  })

  const homeButtonClick = () => {
    dispatch(cleanStorage())
    history.push('/')
  }
  return (
    <div>
      <div className="header-with-input">
        <div className="repositories-table-header">
          <h2 className="main-title">GitHub Stars</h2>
          <button className="home-button" onClick={homeButtonClick}>
            HOME
          </button>
        </div>

        <input placeholder="Searchbar" className="searchbar" />
      </div>

      <table>
        <thead>
          <tr className="active-tr">
            <th scope="col">Repository</th>
            <th scope="col">Description</th>
            <th scope="col">Language</th>
            <th scope="col">Tags</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {repositories.map(repository => {
            console.log(repository)
            return (
              <tr key={repository.id}>
                <td data-label="Repository Name">
                  <a href={repository.html_url}>{repository.name}</a>
                </td>
                <td data-label="Repository Description">
                  {repository.description}
                </td>
                <td data-label="Repository Language">{repository.language}</td>
                <td data-label="Repository Tags" />
                <td data-label="Button">
                  <button>edit</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default RepositoriesTable
