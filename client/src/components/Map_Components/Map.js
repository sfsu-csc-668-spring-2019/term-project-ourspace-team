import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleShowing, setOpenedPlace, setMap, setPosition, setZoom } from '../../actions/mapActions';
import * as MapFunction from './functions/index'
import CommentsSection from './CommentsSection'
import MapTabs from '../MapTab_Components/MapTabs'
import './Map.css'

class Map extends Component {

  state = {
    infowindow: undefined,
    places : []
  }

  // Lifecycle Event
  componentDidMount() {
    // Set to State
    this.props.setPosition( { lat: 37.775, lng: -122.410 } );
    this.props.setZoom( 12.5 );
    // TODO Render Map Specific Markers
    this.getPlaces( this.props.map_id );
  }

  getPlaces = (map_id) => {
    // TODO Query DB to get places associated with map ID
    // As of now we have existing places
    this.renderMap(); // This should be called after the API call
  }

  renderMap = () => {
    MapFunction.loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}js&callback=initMap&libraries=places`);
    window.initMap = this.initMap;
  }

  initMap = () => {
    const map = MapFunction.createNewMap( this.props.sfPosition, this.props.zoom );

    this.setState({ infowindow: new window.google.maps.InfoWindow() });

    window.clickedViewMore = this.clickedViewMore
    window.clickedAddToMap = this.clickedAddToMap
    window.clickedRemoveFromMap = this.clickedRemoveFromMap

    this.addSearchBoxAndAutoComplete( map );
    this.addCommentsSection( map );
    this.renderSavedPlaces( map );

    // add Map to Redux
    this.props.setMap( map );
  }

  // TODO - Delete this later or change to modal
  clickedViewMore = (place_id) => {
    let index = this.state.places.map((place) => { return place.place_id; }).indexOf(place_id);
    let place = this.state.places[index];

    this.props.setOpenedPlace( place );

    this.state.infowindow.close();

    const updateShowing = (this.props.isShowing === "none") ? "" : "none";
    this.props.toggleShowing(updateShowing);
  }

  addSearchBoxAndAutoComplete = ( map ) => {
    // Create the search box and link it to the UI element
    let input = document.getElementById('pac-input');
    let searchBox = new window.google.maps.places.SearchBox(input);
    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(input);

    // Bound the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', () => {
      searchBox.setBounds(map.getBounds());
    });

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', () => {
      let places = searchBox.getPlaces();
      // Close any open info windows
      this.state.infowindow.close();

      if (places.length === 0) {
        return;
      }

      // For each place, get the icon, name and location.
      let bounds = new window.google.maps.LatLngBounds();

      places.forEach((place) => {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }

        let place_photos = MapFunction.getPlacePhotos(place);

        let newPlace = {
          place_id: place.place_id,
          name: place.name,
          address: place.formatted_address,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          phone: (place.international_phone_number === undefined) ? '': place.international_phone_number,
          price_level: place.price_level,
          photos: ( place_photos === undefined) ? [] : place_photos,
          icon: (place_photos === undefined) ? '' : place_photos[0],
        }

        this.addNewPlaceToState(newPlace);

        // Create a marker and set its content
        this.setMarkerInfoWindow(map, MapFunction.getMarker(map, newPlace), newPlace, false)

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }

  addCommentsSection = ( map ) => {
    let placeComments = document.getElementById('place-comments');
    map.controls[window.google.maps.ControlPosition.BOTTOM_LEFT].push(placeComments);
  }

  renderSavedPlaces = ( map ) => {
    // TODO UNCOMMENT THIS WHEN READY TO DEPLOY
    // this.state.places.map((place) => {
    //   this.setMarkerInfoWindow(map, MapFunction.getMarker(map, place), place, true);
    // });
  }

  addNewPlaceToState = (place) => {
    let updatedPlaces = this.state.places.slice();
    updatedPlaces.push(place);

    this.setState({
      places: updatedPlaces
    });
  }

  setMarkerInfoWindow = ( map,  marker, place, saved) => {
    marker.addListener('click', () => {
      // Change content
      this.state.infowindow.setContent(MapFunction.getContentString(place, saved));
      // Open info window
      this.state.infowindow.open(map, marker);
    })
  }

  clickedAddToMap = (place_id) => {
    const index = this.state.places.map((place) => { return place.place_id; }).indexOf(place_id);
    const place = this.state.places[index];
    fetch(`/addPlaceToMap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1, // This needs to be dynamic somehow
        place: place
      })

    }).then(( response ) => {
      // TODO different stuff based on response
      console.log(response);
    });
  }

  // clickedRemoveFromMap = () => {

  // }

  render() {
    return (
      
      <div 
        id="mapContainer" 
        clasName="mapContainer"
        style={mapContainerStyle} 
      >
        <MapTabs/>

        <link rel="stylesheet"
              href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"
              integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX"
              crossorigin="anonymous"/>

        {/* Search Box */}
        <input 
          id="pac-input"
          className ="controls searchBox"
          type="text"
          placeholder="Search Here"
        ></input>

        {/* Place Comments Section */}
        <CommentsSection 
          place={this.state.openedPlace} 
          isShowing={"none"}/>

        {/* Map */}
        <div 
          id="map"
        >
        </div>
      </div>
    );
  }
}

var mapContainerStyle = {
  height: '100%',
  overflow: 'hidden',
};

Map.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleShowing: PropTypes.func.isRequired,
  setOpenedPlace: PropTypes.func.isRequired,
  setMap: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  setZoom: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isShowing: state.maps.isShowing,
  sfPosition: state.maps.sfPosition,
  zoom: state.maps.zoom
});

export default 
connect(mapStateToProps, { 
  toggleShowing, 
  setOpenedPlace, 
  setMap, 
  setPosition,
  setZoom })(Map);