import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './components/Landing'
import SearchPage from './components/SearchPage'

export default props => (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Landing} />
          <Route exact path='/login' component={ Landing } />
          <Route exact path='/search' component={ SearchPage } />


        </Switch>
    </BrowserRouter>
  )