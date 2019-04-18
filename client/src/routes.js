import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/Login'

export default props => (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Login} />
          <Route exact path='/login' component={ Login } />

        </Switch>
    </BrowserRouter>
  )