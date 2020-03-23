import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import RepositoriesTable from '../RepositoriesTable'
import MainPage from '../MainPage'
import { history } from '../utils/browser'
import { REPOSITORIES_TABLE } from '../routes'

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path={REPOSITORIES_TABLE} component={RepositoriesTable} />
      </Switch>
    </div>
  </ConnectedRouter>
)

export default Router
