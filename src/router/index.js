import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import RepositoriesTable from '../RepositoriesTable'
import MainPage from '../MainPage/index'
import { history } from '../utils/browser'
import { REPOSITORIES_TABLE } from '../routes'
import TreesBackground from '../Background/tressbackground'

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <TreesBackground />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path={REPOSITORIES_TABLE} component={RepositoriesTable} />
      </Switch>
    </div>
  </ConnectedRouter>
)

export default Router
