import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LoggedInTopBar from './LoggedInTopBar';
import Map from './Map_Components/Map';
import '../App.css';
import TrendingPlacesList from './Trending_Page_Components/TrendingPlacesList';

var mapStyles = {
    height: 'calc(100% - 64px)',
    width: '75%',
    left: 'auto',
    right: '0px',
    position: 'absolute',
    display: 'block',

};

class TrendingPage extends Component {
  render() {
    return (
      <div>
        <LoggedInTopBar />
          <div>
            <section className="mainContent">
              <Grid container spacing={24}>
                <Grid container item sm={12} direction="row" spacing={24}>
                  <Grid item sm={3} >
                    <TrendingPlacesList />
                  </Grid>
                  <Grid item sm={9} container direction="column" style={mapStyles}>
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

export default TrendingPage;