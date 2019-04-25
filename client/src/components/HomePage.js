import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import LoggedInTopBar from './LoggedInTopBar';
import Typography from '@material-ui/core/Typography';
import Map from './Map_Components/Map';
import '../App.css';
import { CardContent } from '@material-ui/core';

class HomePage extends Component {

    render() {
        return (
            <div>
                <LoggedInTopBar />

                <Grid container spacing={24}>
                
                    <Grid container item xs={12} direction="row" spacing={24}>
                        <Grid item xs={4}>
                        <Card>
                            <CardContent>
                            <Typography variant="title">Welcome to MapSpace</Typography>

                                </CardContent>
                        </Card>
                        </Grid>
                        <Grid item xs={8} container direction="column">
                            <Map />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default HomePage;