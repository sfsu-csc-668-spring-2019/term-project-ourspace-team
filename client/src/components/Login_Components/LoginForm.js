import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './LoginForm.css'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    showPassword: false,

  };

  componentDidMount() {
    //this.setState({responseToGet: "before"});
    // this.callApi()
    //   .then(res => this.setState({ response: res}))
    //   .catch(err => console.log(err));
    // console.log(this.state.resposnse);
  }

  callApi = async () => {
    // const response = await fetch('/login');
    // const body = await response.json();
    // const jsonintotext = JSON.stringify(body);

    // if (response.status !== 200) throw Error(body.message);

    // return jsonintotext;
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  // This function can be changed to send data to our API
  clickedButton = async e => {
    //alert(`${this.state.username} - ${this.state.password}`);
    //req api call
    e.preventDefault();
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: this.state.username, password: this.state.password})
    });
    // const body = await response.json();
    // const jsonintotext = JSON.stringify(body);
    // this.setState({STATEGOESHERE: body});
    return;
  }

  render() {
    return (
      <div>
        {/* <p>{this.state.response}</p> */}
        <br/>
        <Card className='card loginCard'>
          <CardContent>
            <Typography className="loginCardTitle" variant="h5">Login</Typography>

            <br/>
            {/* Username Field */}
            <TextField
              id="outlined-simple-start-adornment"
              className="margin textField userNameField"
              variant="outlined"
              type="text"
              label="Username" 
              value={this.state.username}
              onChange={this.handleChange('username')}
              InputProps={{
                startAdornment: <InputAdornment position="start">@</InputAdornment>,
              }}
            />

            <br/><br/>

            {/* Password Field */}
            <TextField
              id="outlined-adornment-password"
              className="margin textField passwordField"
              variant="outlined"
              type={this.state.showPassword ? 'text' : 'password'}
              label="Password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <br/><br/>

            {/* Login Button */}
            <Button variant="contained" color="primary" className="button rightButton" onClick={this.clickedButton} >
              Log In
              {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
              <Icon className="rightIcon">arrow_forward_ios</Icon>
            </Button>
            <br/><br/>
          </CardContent>
        </Card>

        <br/>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (LoginForm);