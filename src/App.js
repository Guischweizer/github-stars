import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Router from './router'
import { getIsFetching } from './store/repositories/selectors'
import Loader from './Loader'
import TreesBackground from './Background/tressbackground'

const App = () => {
  const isLoading = useSelector(getIsFetching)

  return (
    <Fragment>
      <TreesBackground />
      {isLoading ? <Loader /> : <Router />}
    </Fragment>
  )
}

export default App
