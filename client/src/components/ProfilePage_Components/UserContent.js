import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    text:{
      float: 'left',
      fontSize: "20px",
      paddingRight: 25,
      paddingLeft: 40,
      paddingBottom: 50,
    },
    };

class UserContent extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Typography className={classes.text}>{this.props.usertag} saved their favorite donut shop!</Typography>
            </div>
        );
    }
}

UserContent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(UserContent);