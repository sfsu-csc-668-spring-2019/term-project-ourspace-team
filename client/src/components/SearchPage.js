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
import SearchResults from './SearchPage_Components/SearchResults'
import '../App.css';
import './SearchPage_Components/SearchPage.css';
import LoggedInTopBar from './LoggedInTopBar';

class SearchPage extends Component {

  state = {
    search: '',
    results: [
      {
        name: "Tony",
        name2: "Tony2"
      },
      {
        name: "Tiger",
        name2: "Tiger2"
      },
      {
        name: "Meow",
        name2: "Meow2"
      }
    ]
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    let cards = this.state.results.map(name => {
      return (
        // Props name is resulting, passing in the state stuff to SearchResults
        <SearchResults resulting={name} />
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
               
               {/* Renders all the cards here*/}
                {cards}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default SearchPage;