import React,  { Component } from 'react';
import TopBar from './TopBar';
import LoginForm from './Login_Components/LoginForm'

class Login extends Component{

  render(){

    return(
      <div>
        <TopBar/>
        <br />
        <div>
          < LoginForm / >
        </div>
      </div>
    );
  }
}

export default Login;