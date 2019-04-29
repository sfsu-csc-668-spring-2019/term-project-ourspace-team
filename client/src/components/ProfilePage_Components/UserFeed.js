import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
        marginTop: 40,
        marginLeft: 100,
        marginRight: 40,
        paddingLeft: 170,
        paddingRight: 170,

    },
    userName:{
        useNextVariants: true,
        float: 'left',
        fontSize: "25px",
        paddingTop: 10,
      },
    root:{
        useNextVariants: true,
        float: 'right',
        fontSize: "20px",
        marginTop: 10,
        paddingRight: 45,
      },

  };

class UserFeed extends Component {
    state = {
        userName: 'Donut',
        following: 0,
        followers: 0,
        placesSaved: 1
      };

    render() {
        const { classes } = this.props;
        return(
            <div>
               <Card className="outerCard">
                    <CardContent className="outerCardContents">
                        <AccountCircle className={classes.AccountCircleIcon} />
                        <Typography className={classes.userName} value={this.state.userName}> @ {this.state.userName}</Typography>
                        {/*Follower, Following, Places Saved count*/}
                        <Typography className={classes.root} value={this.state.placesSaved}>
                            <Typography component ="span" className="placesSavedValues">{this.state.placesSaved} </Typography>
                            Places Saved
                        </Typography>
                        <Typography className={classes.root} value={this.state.followers}>
                            <Typography component ="span" className="followerValues">{this.state.followers} </Typography>
                            Followers
                        </Typography>
                        <Typography className={classes.root} value={this.state.following}>
                            <Typography component ="span" className="followingValues">{this.state.following} </Typography>
                            Following
                        </Typography>
                        <Button className={classes.followButton}>Follow</Button>
                        <Card className="innerCardContents">
                            <UserContent usertag={this.state.userName}/>
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