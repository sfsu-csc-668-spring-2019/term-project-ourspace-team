import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../assets/MapSpace.png';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import '../App.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
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

class LoggedInTopBar extends React.Component{

  state={
    accountIcon: null,
  }

  handleMenu = event => {
    this.setState({ accountIcon: event.currentTarget });
  };

  handleProfile = () => {
    this.setState({ accountIcon: null });
  };
  handleLogout = () => {
    this.setState({ accountIcon: null });
  };

  render(){
    const { classes } = this.props;
    const {accountIcon} = this.state;
    const open = Boolean(accountIcon);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} className="logo" alt="MapSpace" />
            <a href="/#" className={classes.link}>
              Trending
            </a>
            <span className={classes.menu}>
              <a href="/friends" className={classes.menu}>
                Find Friends</a>
  
              <a href="/messages" className={classes.menu}>
                Messages </a>
            </span>
            <IconButton
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
                  id="menu-appbar"
                  accountIcon={accountIcon}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleProfile}>Profile</MenuItem>
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );

  }

}

LoggedInTopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoggedInTopBar);