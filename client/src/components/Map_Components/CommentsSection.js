import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleShowing } from '../../actions/mapActions'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
      placePhotos = <div className="column"><GridList cellHeight={160} className={classes.gridList} cols={3}>
        {this.props.openedPlace.photos.map(tile => (
          <GridListTile key={tile}>
            <img src={tile} alt={tile} />
          </GridListTile>
        ))}
      </GridList></div>
    } else {
      placePhotos = <div className="column"><GridList></GridList></div>
    }

    return (
        <div
          id="place-comments"
          style={{height: "80%", width:"70%", marginBottom: "2%", marginLeft: "9.5%", display: this.props.isShowing, overflowY: "scroll" }}
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
              <div className="row">
                {placePhotos}
                <div className="column">
                  Hello Test
                </div>
              </div>
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
