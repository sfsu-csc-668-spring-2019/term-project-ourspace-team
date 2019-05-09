import React,  { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TopBar from './TopBar';
import RegisterForm from './Login_Components/RegisterForm';

import Typography from '@material-ui/core/Typography';
import '../App.css';

class Login extends Component{

  render(){
    return(
      <div>
        <TopBar/>
        <Grid container spacing={24}>
          <Grid container item xs={12} direction="row" spacing={24}>
            <Grid item xs={6} container direction="column" className="landing-block">
              <Typography variant="title" >The places people are talking about.</Typography>   
              <Typography variant="display1"> Create maps of your favorite places </Typography>
              <Typography variant="display1"> Share them with your friends </Typography>
              
            </Grid>
            <Grid item xs={6} container direction="row" spacing={6}>
              <Grid item xs={12}>
                {/* < LoginForm / > */}
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