import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import SecretFriend from './pages/secretFriend'
import NewSecretFriend from './pages/newSecretFriend'
import NotFound from './pages/notFound'

export default () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/secret-friend' exact component={NewSecretFriend} />
      <Route path='/secret-friend/:id' component={SecretFriend} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)