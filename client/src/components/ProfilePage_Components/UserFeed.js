import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { typography } from '@material-ui/system';
import { unstable_Box as Box } from '@material-ui/core/Box';
import './UserFeed.css';
import UserContent from './UserContent';

const styles = {
    AccountCircleIcon:{
      float: 'left',
      fontSize: "100px",
      paddingRight: 25,
      paddingLeft: 40,
      paddingBottom: 50,
     
    },
    followButton:{
        background: '#4490e6',
        float: 'right',
        marginRight: 100,
        marginTop: 100,
        paddingLeft: 150,
        paddingRight: 150,

    },
    userName:{
        float: 'left',
        fontSize: "25px",
        paddingTop: 10,
      },
    root:{
        float: 'right',
        fontSize: "20px",
        paddingRight: 20,
      },
    values:{
        float: 'right',
        fontSize: "20px",
        paddingRight: 20,
    }
  };

class UserFeed extends Component {
    state = {
        userName: '',
        following: 0,
        followers: 0,
        placesSaved: 0
      };

    render() {
        const { classes } = this.props;
        return(
            <div>
               <Card className="outerCard">
                    <CardContent className="outerCardContents">
                        <AccountCircle className={classes.AccountCircleIcon} />
                        <Typography className={classes.userName} value={this.state.userName}> @ username</Typography>
                        <Typography className="savedPlaces" value={this.state.placesSaved}>
                            <Box>Places Saved</Box>
                        </Typography>
                        <Typography className={classes.root} value={this.state.followers}><div>{this.state.followers}</div>Followers</Typography>
                        <Typography className={classes.root} value={this.state.following}><div>{this.state.following}</div>Following</Typography>
                        <Button className={classes.followButton}>Follow</Button>

                        <Card className="innerCardContents">
                            <UserContent />
                        </Card>
                        
                    </CardContent>
               </Card>
            </div>
            
        );
    }
}

UserFeed.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(UserFeed);