import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import SearchResults from './SearchResults'
import '../App.css';
import './SearchPage.css';
import LoggedInTopBar from './LoggedInTopBar';


const styles = {
  viewProfileButton:{
    background: '#83bc45',
    color: '#fff',
    marginRight: 15,
    float: 'right',
    textTransform: 'none',
  },
  followButton:{
    background: '#4490e6',
    color: '#fff',
    fontFamily: 'Raleway',
    float: 'right',
    marginRight: 15,
    textTransform: 'none',
  },
  AccountCircleIcon:{
    float: 'left',
    paddingTop: 5,
    paddingRight: 25,
    paddingLeft: 40,
    
  }
};


class SearchPage extends Component {

  state = {
    search: '',
    results: [
      {
        name: "Tony"
      },
      {
        name: "Tiger"
      },
      {
        name: "Meow"
      }
    ]
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    let cards = this.state.results.map(name => {
      return (
        <SearchResults resultTest={name} />
      );
    });
    return (
      <div>
        <LoggedInTopBar />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Card className="card outerCardStyle">
            <CardContent>
              <Typography className="findFriends" variant="h6">Find Friends</Typography>
              {/* Search Field */}
              <Grid
                className="searchFieldGrid"
              >
                <TextField
                  className="searchField"
                  id="search"
                  variant="outlined"
                  type="text"
                  value={this.state.search}
                  onChange={this.handleChange('search')}
                  placeholder="Search Username"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">@</InputAdornment>,
                  }}
                />
               
                {cards}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchPage);