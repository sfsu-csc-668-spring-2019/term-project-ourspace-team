import React,  { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TopBar from './TopBar';
import LoginForm from './Login_Components/LoginForm';
import RegisterForm from './Login_Components/RegisterForm';
import Typography from '@material-ui/core/Typography';
import '../App.css';

class Login extends Component{

  render(){
    return(
      <div>
        <TopBar/>
        <Grid container spacing={8}>
          <Grid container item xs={12} direction="row" spacing={24}>
            <Grid item xs={6} container direction="column" spacing={24}>
              <Paper className="landing-text">
              <Typography variant="title">Welcome to MapSpace</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} container direction="row" spacing={6}>
              <Grid item xs={12}>
              < LoginForm / >
              </Grid>
              <Grid item xs={12}>
              < RegisterForm / >
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </div>
    );
  }
}

export default Login;