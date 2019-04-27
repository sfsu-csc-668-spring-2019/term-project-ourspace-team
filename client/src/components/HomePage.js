import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LoggedInTopBar from './LoggedInTopBar';
import ProfileCard from './Home_Components/ProfileCard';
import Map from './Map_Components/Map';
import '../App.css';
import { CardContent } from '@material-ui/core';
import PlacesList from './Home_Components/PlacesList';



class HomePage extends Component {

    render() {
        return (
            <div>
                <LoggedInTopBar />
                <div>
                    <Grid container spacing={24}>
                        <Grid container item sm={12} direction="row" spacing={24}>
                            <Grid container direction="column" item sm={4} spacing={8}>
                                <Grid item sm>
                                  <ProfileCard/>
                                </Grid>
                                <Grid item sm>
                                  <PlacesList/>
                                </Grid>
                            </Grid>
                            <Grid item xs={8} container direction="column">
                                <Map />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default HomePage;