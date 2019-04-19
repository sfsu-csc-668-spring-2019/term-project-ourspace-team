import React,  { Component } from 'react';
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