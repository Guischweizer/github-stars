import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUserRepositories } from '../store/repositories/selectors'

const RepositoriesTable = ({ history }) => {
  useEffect(() => {
    !repositories && history.push('/')
  })
  const repositories = useSelector(getUserRepositories)

  return <div />
}

export default RepositoriesTable
