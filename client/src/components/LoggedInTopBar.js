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
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
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
        <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
      </Menu>
    );

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

export default withStyles(styles)(LoggedInTopBar);