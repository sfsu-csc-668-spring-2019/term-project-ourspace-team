import React,  { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TopBar from './TopBar';
import LoginForm from './Login_Components/LoginForm';
import RegisterForm from './Login_Components/RegisterForm';
import Map from './Map_Components/Map';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import { CardContent } from '@material-ui/core';

class Login extends Component{

  render(){
    return(
      <div>
        <TopBar/>
        <Grid container spacing={24}>
          <Grid container item xs={12} direction="row" spacing={24}>
            <Grid item xs={6} container direction="column">
              <br/>
              <Card className="landing-text">
                <CardContent> 
                  <Typography variant="title">Welcome to MapSpace</Typography>
                </CardContent>
              </Card>
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

        {/* Map Area */}
        <Grid container spacing={24}>
          <Grid container item xs={12} direction="row" spacing={24}>
            <Grid item xs={6} container direction="column">
              <Map /> 
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Login;