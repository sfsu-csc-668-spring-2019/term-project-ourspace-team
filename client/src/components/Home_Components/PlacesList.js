import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { getOpenedMapPlaces } from '../../actions/mapActions';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginLeft: '1rem',
    margin: 'auto',
    overflowY: 'auto',
    maxHeight: '350px',
  },
  list: {
    flexDirection: 'column',
    height: '100%',
    overflowY: 'auto',

  },
  listItem: {
    flexGrow:'1',
  }

});

class PlacesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      places: [],
    }
  }
  
  componentWillMount() {
    this.props.getOpenedMapPlaces();
  }

  
  render() {
    const { classes } = this.props;
    const placesList = this.props.places.map( place => (
      <ListItem className={classes.listItem}>
        <ListItemText
          primary={place.name}
        />
      </ListItem>
    ));

    return (
      <Paper className={classes.paper}>
          <div className={classes.list}>
              <List >
                {placesList}
              </List>
          </div>
      </Paper>
    );

  }
}

const mapStateToProps = state => ({
  places: state.maps.places,
});

PlacesList.propTypes = {
  classes: PropTypes.object.isRequired,
  places: PropTypes.array.isRequired,
  getOpenedMapPlaces: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getOpenedMapPlaces }) (withStyles(styles)(PlacesList));
