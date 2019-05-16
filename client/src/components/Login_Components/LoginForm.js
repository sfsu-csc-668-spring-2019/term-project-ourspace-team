import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import "./LoginForm.css";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  field:{
    width: "100%",
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  // This function can be changed to send data to our API
  onSubmit = async e => {

    e.preventDefault();

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).catch( error => console.log(error));

    const userData  = await response.json();
    console.log(userData);

    if( userData.errorMessage !== undefined ) {
      console.log( "Error Handling here ");
      return;
    }

    // Save user Data to state

    return;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Paper className={classes.paper}>
          <Typography className="loginCardTitle" variant="h5">
            Login
          </Typography>

          <form className={classes.form}>
            {/* Username Field */}
            <TextField
              id="outlined-simple-start-adornment"
              name="username"
              className={classes.field}
              variant="outlined"
              type="text"
              label="Username"
              autoComplete="username"
              margin="normal"
              value={this.state.username}
              onChange={this.onChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">@</InputAdornment>
                )
              }}
              required
              autoFocus
            />

            {/* Password Field */}
            <TextField
              id="outlined-adornment-password"
              name="password"
              className={classes.field}
              variant="outlined"
              type={this.state.showPassword ? "text" : "password"}
              label="Password"
              autocomplete="current-password"
              margin="normal"
              value={this.state.password}
              onChange={this.onChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              required

            />

            {/* Login Button */}
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.onSubmit}
              classes={"align-items-xs-flex-end"}
              fullWidth

            >
              Log In
            </Button>
          </form>
        </Paper>

        <br />
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginForm);
