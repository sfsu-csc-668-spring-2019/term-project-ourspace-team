import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { getMap } from '../../actions/mapActions';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Map from '../Map_Components/Map';

var mapStyles={
    height: '100%',
    width: '100%',
    left: 'auto',
    right: 'auto',
    display: 'block',

};
// Maps are rendered into the tab containers
function TabContainer() {
  return (
    <Grid direction="column" container style={mapStyles}>              
    {/* This throws errors for calling Google Map API multiple times 
        <Map /> 
    */}
    </Grid>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    marginTop: 18,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class MapTabs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Grid >
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Map 1" />
            <Tab label="Map 2" />
            <Tab label="Map 3" />
          </Tabs>
        </Grid>
        {value === 0 && <TabContainer>{/*this.props.getMap()*/}</TabContainer>}
        {value === 1 && <TabContainer>Probably place pins in here to render onto map.</TabContainer>}
        {value === 2 && <TabContainer>Probably place pins in here to render onto map.</TabContainer>}
        
      </div>
    );
  }
}
/*
MapTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  getMap: PropTypes.func.isRequired,
  mapTab: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  mapTab: state.maps.map
});*/

export default withStyles(styles)(MapTabs);
//export default connect(mapStateToProps, { getMap })(withStyles(styles)(MapTabs));