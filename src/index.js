import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import reducer from './store'
import './index.css'
import App from './App'

const history = createBrowserHistory()

const store = createStore(
  combineReducers({
    ...reducer,
    router: connectRouter(history),
  }),
  compose(applyMiddleware(thunk, routerMiddleware(history))),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
