import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleShowing } from '../../actions/mapActions'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

class CommentsSection extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      isShowing: '',
      openedPlace: '',
      slideIndex: 1
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick = ( e ) => {
    e.preventDefault();

    const updateShowing = ( this.props.isShowing === "none") ? "" : "none";

    this.props.toggleShowing( updateShowing );
  }

  componentDidMount() {
    this.setState({
      isShowing: 'none',
      openedPlace: {}
    });
  }

  componentWillReceiveProps( nextProps ){
    if( nextProps.openedPlace ) {
      this.setState({ openedPlace: nextProps.openedPlace });
    }
  }

  render() {
    const { classes } = this.props;

    let placePhotos;
    if( this.props.openedPlace.photos !== undefined ) {
      placePhotos = <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {this.props.openedPlace.photos.map(tile => (
          <GridListTile key={tile}>
            <img src={tile} alt={tile} />
          </GridListTile>
        ))}
      </GridList>
    } else {
      placePhotos = <GridList></GridList>
    }

    return (
        <div
          id="place-comments"
          style={{height: "80%", width:"90%", marginBottom: "5%", marginLeft: "7%", display: this.props.isShowing, overflowY: "scroll" }}
          className="container"
        >
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs float-sm-right">
                <li className="nav-item">
                 <button type="button" className="btn btn-dark" onClick={this.onClick}>X</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div>
                <h5 className="card-title"id="place-comments-title">{this.props.openedPlace.name}</h5>
                <p id="place-comments-address">{this.props.openedPlace.address}</p>
                <p id="place-comments-phone">{this.props.openedPlace.phone}</p>
              </div>
              <Grid container>
                <Grid item>
                  {placePhotos}
                </Grid>
                <Grid item></Grid>
                <Grid item style={{width: 500}}>
                  <TextField
                    id="filled-full-width"
                    label="Join the Conversation"
                    style={{ margin: 8 }}
                    placeholder="Enter a Comment"
                    fullWidth
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button} 
                    style={{float: "right"}}
                    // TODO set an on click
                    >
                    Share
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>

        </div>
  );
  }
}

CommentsSection.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleShowing: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isShowing: state.maps.isShowing,
  openedPlace: state.maps.openedPlace
});

export default connect(mapStateToProps, { toggleShowing })(withStyles(styles)(CommentsSection));
