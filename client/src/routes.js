import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './components/Landing'

export default props => (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Landing} />
          <Route exact path='/login' component={ Landing } />

        </Switch>
    </BrowserRouter>
  )