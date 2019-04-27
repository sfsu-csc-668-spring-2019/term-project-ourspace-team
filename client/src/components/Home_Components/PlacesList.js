import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginLeft: '1rem',
    margin: 'auto',
    maxWidth: '100%',
    maxHeight: '20rem',


  },

});

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6].map(value =>
      React.cloneElement(element, {
          key: value,
      }),
  );
}

class PlacesList extends React.Component {

  
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>

          <div >
              <List >
                  {generate(
                      <ListItem>
                          <ListItemText
                              primary="Single-line item"
                          />
                      </ListItem>,
                  )}
              </List>
          </div>

  </Paper>
    );

  }
}
PlacesList.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(PlacesList);
