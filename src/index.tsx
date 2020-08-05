import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './MainPage'
import './index.sass'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
