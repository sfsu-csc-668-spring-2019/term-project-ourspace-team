import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../assets/MapSpace.png";
import "../App.css";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {},
  link: {
    fontFamily: "Raleway",
    color: "#fff",
    textDecoration: "none"
  },
  menu: {
    marginLeft: "auto",
    marginRight: "0.5rem",
    fontFamily: "Raleway",
    color: "#fff",
    textDecoration: "none"
  },
  login: {
    padding: "10px",
    borderStyle: "solid",
    color: "#fff",
    textDecoration: "none",
    borderWidth: "1px",
    borderRadius: "5px"
  }
};

function TopBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <a href="/">
            <img src={logo} className="logo" alt="MapSpace" />
          </a>
          <a href="/trending" className={classes.link}>
            Trending
          </a>
          <span className={classes.menu}>
            <a href="/login" className={classes.login}>
              Sign In
            </a>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);
