import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

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

  state = {
    isShowing: this.props.isShowing,
    place_id: this.props.place.place_id,
    name: this.props.place.name,
    address: this.props.place.address,
    lat: this.props.place.lat,
    lng: this.props.place.lng,
    phone: this.props.place.phone,
    price_level: this.props.place.price_level,
    photos: this.props.place.photos,
    icon: this.props.place.icon
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({
      isShowing: this.props.isShowing,
      place: this.props.place
    });
  }

  componentWillReceiveProps(nextProps){
    console.log("These are the passed in props")
    console.log(nextProps);
    if(nextProps.place !== this.state.place) {

      console.log( nextProps.place.photos );
      this.setState({
        place_id: nextProps.place.place_id,
        name: nextProps.place.name,
        address: nextProps.place.address,
        lat: nextProps.place.lat,
        lng: nextProps.place.lng,
        phone: nextProps.place.phone,
        price_level: nextProps.place.price_level,
        // photos: nextProps.place.photos,
        icon: nextProps.place.icon,
        isShowing: (this.state.isShowing === "none") ? "" : "none" }
      );

      console.log("I have set the new state");
    }

    console.log("Place in State is Now");
    console.log(this.state);
  }

  toggleShowing = () => {
    console.log("I clicked the close button");
    this.setState({ isShowing: (this.state.isShowing === "none") ? "" : "none" });
    console.log(this.state.isShowing);
  }

  render() {
    return (
        <div
          id="place-comments"
          style={{height: "80%", width:"70%", marginBottom: "2%", marginLeft: "9.5%", display: this.state.isShowing, overflowY: "scroll" }}
          className="container"
        >
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs float-sm-right">
                <li className="nav-item">
                 <button type="button" className="btn btn-dark" onClick={this.toggleShowing}>X</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title"id="place-comments-title">{this.state.name}</h5>
              <p id="place-comments-address">{this.state.address}</p>
              <p id="place-comments-phone">{this.state.phone}</p>
              <div className="row">
                <div id="carouselExampleControls" className="carousel slide card-body col-sm-6" data-ride="carousel">
                  <div className="carousel-inner" style={{height: 200}}>
                    {/* {this.state.place.photos.map((photo) => (
                      <div className="carousel-item">
                        <img className="d-block w-100 img-reponsive"
                              style={{ height: 200 }}
                              src={photo}
                              alt="Slide"
                        />
                      </div>
                    ))} */}
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <div className="col-sm-6">HELLO TEST</div>
              </div>
            </div>
          </div>
        </div>
  );
  }
}

CommentsSection.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CommentsSection);
