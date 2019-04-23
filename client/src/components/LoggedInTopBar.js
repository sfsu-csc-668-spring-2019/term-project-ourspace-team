import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/MapSpace.png';
import '../App.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {

  },
  link:{
    fontFamily: 'Raleway',
    color: '#fff',
    textDecoration: 'none',
  }

};

function TopBar(props){
    const {classes} = props;
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <img src={logo} className="logo" alt="MapSpace" />
              <a href="/#" className={classes.link}>
                Trending
              </a> 

            </Toolbar>
          </AppBar>
        </div>
      );
}

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);