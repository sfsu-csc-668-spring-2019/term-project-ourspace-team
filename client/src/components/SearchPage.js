import React,  { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import '../App.css';
import './SearchPage.css';
import LoggedInTopBar from './LoggedInTopBar';


class SearchPage extends Component{

  state = {
    search: '',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render(){
    return(
      <div>
        <LoggedInTopBar />
        <Card className="card outerCardStyle">
            <CardContent>

            <Typography className="findFriends" variant="h6">Find Friends</Typography>
             {/* Search Field */}
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
             <br/><br/>
              {/* Finding Friends */}
              <Card className="innerCardStyle">
                <Typography className="userNames" variant="h5">@Username

                  <Button className="followButton">
                   +Follow
                  </Button>

                  <Button className ="viewProfileButton" href="#">
                  View Profile
                  </Button>
                </Typography>  
              </Card>

            </CardContent>
            <br/><br/>
        </Card>


      </div>
    );
  }
}

export default SearchPage;