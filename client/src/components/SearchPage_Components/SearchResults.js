import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import './SearchPage.css';

const styles = {
  viewProfileButton: {
    background: '#83bc45',
    color: '#fff',
    marginRight: 15,
    float: 'right',
    textTransform: 'none',
  },
  followButton: {
    background: '#4490e6',
    color: '#fff',
    fontFamily: 'Raleway',
    float: 'right',
    marginRight: 15,
    textTransform: 'none',
  },
  AccountCircleIcon: {
    float: 'left',
    paddingTop: 5,
    paddingRight: 25,
    paddingLeft: 40,

  }
};
class SearchResults extends Component {
  state = {
    search: '',
    result: ''
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {

    const { classes } = this.props;
    return (
      <div>
        <Grid className="innerCardGrid">
          <Card className="innerCardStyle">
            <Typography className="userNames"
              variant="h6"
              value={this.state.result}
              onChange={this.handleChange('results')}
            >
              {/*Have to read variables inside the object passed back by the JSON from search
                Should be username, but only getting name back from backend
              */}
              @  {this.props.resulting.name}
              <AccountCircle className={classes.AccountCircleIcon} />
              <Button className={classes.viewProfileButton} href="#">View Profile</Button>
              <Button className={classes.followButton}> + Follow</Button>
            </Typography>
          </Card>
        </Grid>
      </div>
    );
  }
}


SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResults);