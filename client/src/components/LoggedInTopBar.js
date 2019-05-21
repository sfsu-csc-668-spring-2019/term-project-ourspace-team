import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../assets/MapSpace.png';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';
import '../App.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
  },
  link: {
    fontFamily: 'Raleway',
    color: '#fff',
    textDecoration: 'none',
  },
  menu: {
    marginLeft: 'auto',
    marginRight: '1rem',
    fontFamily: 'Raleway',
    color: '#fff',
    textDecoration: 'none',
  }

};

class LoggedInTopBar extends React.Component {

  state = {
    anchorEl: null,
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }).catch( error => console.log(error));

    this.props.history.push('/');
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <a href="/home">
              <img src={logo} className="logo" alt="MapSpace" />
            </a>
            <a href="/trending" className={classes.link}>
              Trending
            </a>
            <span className={classes.menu}>
              <a href="/search" className={classes.menu}>
                Find Friends</a>

              {/* <a href="/messages" className={classes.menu}>
                Messages </a> */}
            </span>
            <IconButton
              aria-owns={isMenuOpen ? 'material-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    );

  }

}

LoggedInTopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(LoggedInTopBar));