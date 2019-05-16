import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LoggedInTopBar from './LoggedInTopBar';
import ProfileCard from './Home_Components/ProfileCard';
import Map from './Map_Components/Map';
import '../App.css';
import PlacesList from './Home_Components/PlacesList';
import CommentsSection from './Map_Components/CommentsSection';

var mapStyles = {
  height: 'calc(100% - 64px)',
  width: '75%',
  left: 'auto',
  right: '0px',
  position: 'absolute',
  display: 'block'
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
                  <Grid item>
                    <ProfileCard />
                  </Grid>
                  <Grid item>
                    <PlacesList />
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
