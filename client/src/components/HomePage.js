import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LoggedInTopBar from './LoggedInTopBar';
import ProfileCard from './Home_Components/ProfileCard';
import Map from './Map_Components/Map';
import '../App.css';
import { CardContent } from '@material-ui/core';
import PlacesList from './Home_Components/PlacesList';

var mapStyles={
    height: '100%',
    width: '75%',
    left: 'auto',
    right: '0px',
    top: '64px',
    position: 'fixed',
    display: 'block',

};



class HomePage extends Component {


    render() {
        return (
            <div>
                <LoggedInTopBar />
                <div>
                    <section className="mainContent">
                    <Grid container spacing={24}>
                        <Grid container item sm={12} direction="row" spacing={24}>
                            <Grid container direction="column" item sm={3} spacing={8}>
                                <Grid item >
                                  <ProfileCard/>
                                </Grid>
                                <Grid item >
                                  <PlacesList/>
                                </Grid>
                            </Grid>
                            <Grid item xs={9} container direction="column" style={mapStyles}>
                                <Map />
                            </Grid>
                        </Grid>
                    </Grid>
                    </section>
                </div>
            </div>
        );
    }
}

export default HomePage;