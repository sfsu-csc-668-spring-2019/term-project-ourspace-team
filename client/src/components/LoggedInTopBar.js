import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../assets/MapSpace.png';
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

function LoggedInTopBar(props) {
  const { classes } = props;
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
            color="inherit">
            <AccountCircle />
          </IconButton>



        </Toolbar>
      </AppBar>
    </div>
  );
}

LoggedInTopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoggedInTopBar);