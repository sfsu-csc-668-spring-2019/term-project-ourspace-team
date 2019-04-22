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
//import './LoginForm.css'

class RegisterForm extends React.Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickShowConfirmPassword = () => {
    this.setState(state => ({ showConfirmPassword: !state.showConfirmPassword }));
  };

  // This function can be changed to send data to our API
  clickedButton = () => {
    alert(`${this.state.username} - ${this.state.password}`);
    return;
  }

  render() {
    return (
      <div>
        <br/>
        <Card className='card registerCard'>
          <CardContent>
            <Typography className="registerCardTitle" variant="h5">Register</Typography>

            <br/>

            {/* Name Field */}
            <TextField
              id="outlined-name"
              className="margin textField nameField"
              variant="outlined"
              type="text"
              label="Name" 
              value={this.state.name}
              onChange={this.handleChange('name')}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <br/><br/>

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

            {/* Email Field */}
            <TextField
              id="outlined-email"
              className="margin textField emailField"
              variant="outlined"
              type="text"
              label="Email" 
              value={this.state.email}
              onChange={this.handleChange('email')}
              InputLabelProps={{
                shrink: true,
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

            {/* Confirm Password Field */}
            <TextField
              id="outlined-adornment-confirmPassword"
              className="margin textField confirmPasswordField"
              variant="outlined"
              type={this.state.showConfirmPassword ? 'text' : 'password'}
              label="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.handleChange('confirmPassword')}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowConfirmPassword}
                    >
                      {this.state.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <br/><br/>

            {/* Register Button */}
            <Button variant="contained" color="primary" className="button rightButton" onClick={this.clickedButton} >
              Sign Up
              {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
              <Icon className="rightIcon">arrow_forward_ios</Icon>
            </Button>
            <br/><br/>
          </CardContent>
        </Card>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (RegisterForm);