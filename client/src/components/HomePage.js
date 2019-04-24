import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import LoggedInTopBar from './LoggedInTopBar';
import '../App.css';
import { CardContent } from '@material-ui/core';

class HomePage extends Component {

    render() {
        return (
            <div>
                <LoggedInTopBar />
                <Grid container spacing={24}>

                </Grid>
            </div>
        );
    }
}

export default HomePage;