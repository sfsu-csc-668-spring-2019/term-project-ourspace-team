import React, { Component } from 'react';
import './Map.css'

class Map extends Component {

  state = {
    sfPosition : {
      lat: 37.775,
      lng: -122.410
    },
    zoom: 12.5,
    google_place: []
  }

  // Lifecycle Event
  componentDidMount() {
    // TODO Render Map Specific Markers
    this.renderMap();
  }

  // TODO - Delete this later
  clickedGooglePlace = (id) => {
    let index = this.state.google_place.map((place) => { return place.id; }).indexOf(id);
    alert(this.state.google_place[index].name);
  }

  initMap = () => {
    // Create a map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center:  this.state.sfPosition ,
      zoom: this.state.zoom,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: ['roadmap', 'satellite']
      }
    });

    // Create an info window
    let infowindow = new window.google.maps.InfoWindow();

    // Set Functions in Client
    window.clickedGooglePlace = this.clickedGooglePlace

    // AUTO COMPLETE SECTION
    // Create the search box and link it to the UI element
    let input = document.getElementById('pac-input');
    let searchBox = new window.google.maps.places.SearchBox(input);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bound the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', () => {
      searchBox.setBounds(map.getBounds());
    });

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', () => {
      let places = searchBox.getPlaces();
      // Close any open info windows
      infowindow.close();

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

        let newPlace = {
          id: place.place_id,
          name: place.name,
          address: place.formatted_address,
          position: place.geometry.location,
          phone: place.international_phone_number,
          price_level: place.price_level,
          total_ratings: place.user_ratings_total,
          icon: place.icon
        }

        this.addNewPlaceToState( newPlace );

        // Create a marker
        let marker = new window.google.maps.Marker({
          position: place.geometry.location,
          map: map,
          title: place.name,
        });

        // Click on a marker
        marker.addListener('click', () => {
          // Change content
          infowindow.setContent( this.getContentString(newPlace));
          // Open info window
          infowindow.open(map, marker);
        })

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

  addNewPlaceToState = ( place ) => {
    let updated_google_place = this.state.google_place.slice();
    updated_google_place.push( place );
    this.setState({ 
      google_place: updated_google_place
    });
  }

  getContentString = ( place ) => {
     return `<div class="row">
              <div class="column">
                ${(place.icon !== undefined ? `<img src="${place.icon}" alt="Icon of Place">` : ``)}
              </div>
              <div class="column">
                <strong>${place.name}</strong>
                <p>Place ID: ${place.id}</p>
                <p>${(place.address !== undefined ? place.address : 'Address: N/A')}</p>
                <p>${(place.phone !== undefined ? place.phone : 'Phone #: N/A')}</p>
                <button onclick="clickedGooglePlace(\'${place.id}\')">View More</button>
              </div>
            </div>`;
  }

  renderMap = () => {
    this.loadGoogleMapsScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}js&callback=initMap&libraries=places`);
    window.initMap = this.initMap;
  }

  loadGoogleMapsScript = (url) => {
    // Select first Script tag on page.
    let index = window.document.getElementsByTagName("script")[0];

    // Create New Script Tag for Google Maps API
    let script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;

    // Prepend Google Maps API Script to the first of list of scripts
    index.parentNode.insertBefore(script, index);
  }

  render() {
    return (
      <div 
        id="mapContainer" 
        clasName="mapContainer"
      >
        {/* Search Box */}
        <input 
          id="pac-input"
          className ="controls searchBox"
          type="text"
          placeholder="Search Here"
        ></input>

        {/* Map */}
        <div 
          id="map"
        ></div>
      </div>
    );
  }
}

export default Map;