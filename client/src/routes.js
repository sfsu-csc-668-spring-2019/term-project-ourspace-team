import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './components/Landing'
import SearchPage from './components/SearchPage'
import Home from './components/HomePage'
import ProfilePage from './components/ProfilePage'

export default props => (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Landing} />
          <Route exact path='/login' component={ Landing } />
          <Route exact path='/search' component={ SearchPage } />
          <Route exact path='/home' component={Home}/>
          <Route exact path='/profile' component={ProfilePage}/>
        </Switch>
    </BrowserRouter>
  )