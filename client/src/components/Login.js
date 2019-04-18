import React,  { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TopBar from './TopBar';
import LoginForm from './Login_Components/LoginForm'
import RegisterForm from './Login_Components/RegisterForm'

class Login extends Component{

  render(){

    return(
      <div>
        <TopBar/>
        <br />
        <div>
          < LoginForm / >
          < RegisterForm / >
        </div>
      </div>
    );
  }
}

export default Login;