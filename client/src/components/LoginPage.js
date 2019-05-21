import React from "react";
import LoginForm from "./Login_Components/LoginForm";
import TopBar from "./TopBar";
import "../App.css";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <div>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default LoginPage;
