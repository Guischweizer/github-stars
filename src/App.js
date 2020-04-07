import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Router from './router'
import { getIsFetching } from './store/repositories/selectors'
import Loader from './Loader'

const App = () => {
  const isLoading = useSelector(getIsFetching)

  return <Fragment>{isLoading ? <Loader /> : <Router />}</Fragment>
}

export default App
