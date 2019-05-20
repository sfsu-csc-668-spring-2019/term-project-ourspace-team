import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPlaceToMap, getOpenedMapPlaces, toggleShowing, setOpenedPlace, setMap, setPosition, setZoom } from '../../actions/mapActions';
import { getUserMapIds } from '../../actions/userActions'
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
    this.props.getUserMapIds();
    // TODO Render Map Specific Markers
    this.getPlaces( this.props.openedMapId );
  }

  getPlaces = ( mapId ) => {
    // TODO Query DB to get places associated with map ID
    this.props.getOpenedMapPlaces( mapId );
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

    this.renderSavedPlaces( map );
    this.addSearchBoxAndAutoComplete( map );
    this.addCommentsSection( map );

    // add Map to Redux
    this.props.setMap( map );
  }

  // TODO - Delete this later or change to modal
  clickedViewMore = (place_id) => {
    let index = this.props.places.map((place) => { return place.place_id; }).indexOf(place_id);
    let place = this.props.places[index];

    console.log(place);
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
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng(),
          phone: (place.international_phone_number === undefined) ? '': place.international_phone_number,
          price_level: place.price_level,
          photos: ( place_photos === undefined) ? [] : place_photos,
          icon: (place_photos === undefined) ? '' : place_photos[0],
        }

        this.props.places.push(newPlace);

        // Create a marker and set its content
        let marker = MapFunction.getMarker(map, newPlace);
        let contentString = MapFunction.getContentString( newPlace, false );
        this.setMarkerInfoWindow(map, marker, contentString );

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
    this.props.places.map((place) => {
      let marker = MapFunction.getMarker(map, place);
      let contentString = MapFunction.getContentString(place, true);
      this.setMarkerInfoWindow(map, marker, contentString );
    });
  }

  setMarkerInfoWindow = ( map,  marker, contentString ) => {
    marker.addListener('click', () => {
      // Change content
      this.state.infowindow.setContent(contentString);
      // Open info window
      this.state.infowindow.open(map, marker);
    })
  }

  clickedAddToMap = (place_id) => {
    const index = this.props.places.map((place) => { return place.place_id; }).indexOf(place_id);
    const place = this.props.places[index];
    this.props.addPlaceToMap( this.props.openedMapId, place);
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
  addPlaceToMap: PropTypes.func.isRequired,
  getOpenedMapPlaces: PropTypes.func.isRequired,
  toggleShowing: PropTypes.func.isRequired,
  getUserMapIds: PropTypes.func.isRequired,
  setOpenedPlace: PropTypes.func.isRequired,
  setMap: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  setZoom: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isShowing: state.maps.isShowing,
  sfPosition: state.maps.sfPosition,
  zoom: state.maps.zoom,
  openedMapId: state.user.openedMapId,
  places: state.maps.places
});

export default 
connect(mapStateToProps, { 
  addPlaceToMap,
  getOpenedMapPlaces,
  getUserMapIds,
  toggleShowing, 
  setOpenedPlace, 
  setMap, 
  setPosition,
  setZoom })(Map);