import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
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
constructor(props){
  super(props)

  this.state = {
    searchQuery: '',
    results: []
  };

  this.keyPress = this.keyPress.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}
  

  keyPress = (e) => {
    if(e.keyCode === 13){
      this.onSubmit(e);
    }
  };

  /*
 
  */

  onSubmit = async e => {

    e.preventDefault();
    if(this.state.searchQuery !== ''){
      const response = await fetch("/search/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          searchQuery: this.state.searchQuery
        })
      }).catch( error => console.log(error));
  
      
      const userData  = await response.json();
      console.log(userData);
      this.setState({results: userData})
  
      if( userData.errorMessage !== undefined ) {
        console.log( "Error Handling here ");
        return;
      }
    
    } else {
      fetch('/search')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({results: data})
        console.log(this.state.results);
      });
    }


    // const response = await fetch("/search", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     search: this.state.search,
    //   })
    // }).catch( error => console.log(error));

    // const result  = await response.json();
    // console.log(result);

    // if( result.errorMessage !== undefined ) {
    //   console.log( "Error Handling here ");
    //   return;
    // }
    
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    let cards = this.state.results.map(name => {
      return (
        // Props name is resulting, passing in the state stuff to SearchResults
        <div key={name.id}>
          <SearchResults resulting={name} />
        </div>
        
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
                <form >
                <TextField
                  className="searchField"
                  id="searchQuery"
                  name="searchQuery"
                  variant="outlined"
                  type="text"
                  value={this.state.searchQuery}
                  onChange={this.handleChange('searchQuery')}
                  onKeyDown={this.keyPress}
                  placeholder="Search Username"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">@</InputAdornment>,
                  }}
                />
                </form>

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