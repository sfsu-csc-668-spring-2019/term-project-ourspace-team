import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './components/Landing'
import Home from './components/HomePage'

export default props => (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Landing} />
          <Route exact path='/login' component={ Landing } />
          <Route exact path='/home' component={Home}/>

        </Switch>
    </BrowserRouter>
  )