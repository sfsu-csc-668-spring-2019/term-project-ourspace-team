import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
class UserContent extends Component{
    render(){
        return(
            <div>
                <Typography>@ username</Typography>
            </div>
        );
    }
}

export default UserContent;