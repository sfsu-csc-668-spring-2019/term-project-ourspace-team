// import React, { Component } from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import  SearchBox  from 'react-google-maps/lib/components/places/SearchBox';
// import _ from 'lodash';

// class Map extends Component {
//   componentWillMount() {
//     const refs = {}

//     this.setState({
//       bounds: null,
//       center: {
//         lat: 41.9,
//         lng: -87.624
//       },
//       markers: [],
//       onMapMounted: ref => {
//         refs.map = ref;
//       },
//       onBoundsChanged: () => {
//         this.setState({
//           bounds: refs.map.getBounds(),
//           center: refs.map.getCenter(),
//         })
//       },
//       onSearchBoxMounted: ref => {
//         refs.searchBox = ref;
//       },
//       onPlacesChanged: () => {
//         const places = refs.searchBox.getPlaces();
//         const bounds = new window.google.maps.LatLngBounds();

//         places.forEach(place => {
//           if (place.geometry.viewport) {
//             bounds.union(place.geometry.viewport)
//           } else {
//             bounds.extend(place.geometry.location)
//           }
//         });
//         const nextMarkers = places.map(place => ({
//           position: place.geometry.location,
//         }));
//         const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

//         this.setState({
//           center: nextCenter,
//           markers: nextMarkers,
//         });
//         refs.map.fitBounds(bounds);
//       },
//     })
//   }

//   render(){
//     const Map = withScriptjs(withGoogleMap(props => (
//       <GoogleMap
//         defaultCenter = { { lat: 37.775, lng: -122.419 } }
//         defaultZoom = { 12 }
//       >
//         <SearchBox
//           ref={props.onSearchBoxMounted}
//           bounds={props.bounds}
//           controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
//           onPlacesChanged={props.onPlacesChanged}
//         >
//           <input
//             type="text"
//             placeholder="Search for a Place"
//             style={{
//               boxSizing: `border-box`,
//               border: `1px solid transparent`,
//               width: `240px`,
//               height: `32px`,
//               marginTop: `27px`,
//               padding: `0 12px`,
//               borderRadius: `3px`,
//               boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//               fontSize: `14px`,
//               outline: `none`,
//               textOverflow: `ellipses`,
//             }}
//           />
//         </SearchBox>
//       </GoogleMap>
//     )));
//     return (
//       <div>
//         <Map
//           googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&libraries=places"
//           loadingElement={<div style={{ height: `100%` }} />}
//           containerElement={ <div style={{ height: `700px`, width: '700px' }} /> }
//           mapElement={ <div style={{ height: `100%` }} /> }
//         />
//       </div>
//     );
//   }
// }

// export default Map;

import React, { Component } from 'react';
import _ from 'lodash'
import { compose, withProps, lifecycle } from 'recompose'
import { withScriptjs,withGoogleMap,GoogleMap,Marker,} from 'react-google-maps';
import{ SearchBox } from 'react-google-maps/lib/components/places/SearchBox';

class Map extends Component {

  render() {
    const MapWithASearchBox = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&libraries=places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `700px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      lifecycle({
        componentWillMount() {
          const refs = {}

          this.setState({
            bounds: null,
            center: {
              lat: 37.775, lng: -122.419
            },
            zoom: 12,
            google_place: [],
            markers: [],
            onMapMounted: ref => {
              refs.map = ref;
            },
            onBoundsChanged: () => {
              this.setState({
                bounds: refs.map.getBounds(),
                center: refs.map.getCenter(),
              })
            },
            onSearchBoxMounted: ref => {
              refs.searchBox = ref;
            },
            onPlacesChanged: () => {
              const places = refs.searchBox.getPlaces();
              const bounds = new window.google.maps.LatLngBounds();
              const infowindow = new window.google.maps.InfoWindow();

              places.forEach(place => {
                if (!place.geometry) {
                  console.log("Returned place contains no geometry");
                  return;
                }

                console.log(place); // Remove later
                let newPlace = {
                  id: place.place_id,
                  name: place.name,
                  address: place.formatted_address,
                  phone: place.international_phone_number,
                  price_level: place.price_level,
                  total_ratings: place.user_ratings_total
                }

                let updated_google_place = this.state.google_place.slice();
                updated_google_place.push( newPlace );
                this.setState({ google_place: updated_google_place });

                // Create a marker
                let marker = new window.google.maps.Marker({
                  position: place.geometry.location,
                  map: refs.map,
                  title: place.name,
                });

                let contentString = `<strong>${newPlace.name}</strong>` +
                                    `<p>Place ID: ${newPlace.id}</p>` +
                                    `<p>${newPlace.address}</p>` +
                                    `<p>${newPlace.phone}</p>` +
                                    `<p>Price Level: ${newPlace.price_level}</p>` +
                                    `<p>Total Google Ratings: ${newPlace.total_ratings}</p>` +
                                    `<button onclick="clickedGooglePlace(\'${newPlace.id}\')">View More</button>`;

                // Click on a marker
                marker.addListener('click', () => {
                  // Change content
                  infowindow.setContent(contentString);
                  // Open info window
                  infowindow.open(marker.map, marker);
                })

                this.setState({
                  markers: [ marker ]
                });

                if (place.geometry.viewport) {
                  // Only geocodes have viewport.
                  bounds.union(place.geometry.viewport);
                } else {
                  bounds.extend(place.geometry.location);
                }
              });
              refs.map.fitBounds(bounds);
                // if (place.geometry.viewport) {
                //   bounds.union(place.geometry.viewport)
                // } else {
                //   bounds.extend(place.geometry.location)
                // }
              // });
              // const nextMarkers = places.map(place => ({
              //   position: place.geometry.location,
              // }));
              // const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

              // this.setState({
              //   center: nextCenter,
              //   markers: nextMarkers,
              //   zoom: 12.5
              // });
              // refs.map.fitBounds(bounds);
            },
          })
        },
      }),
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={props.zoom}
        center={props.center}
        onBoundsChanged={props.onBoundsChanged}
      >
        <SearchBox
          ref={props.onSearchBoxMounted}
          bounds={props.bounds}
          controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={props.onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Search for a Place"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `600px`,
              height: `45px`,
              marginTop: `27px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
            }}
          />
        </SearchBox>
        {props.markers.map((marker, index) =>
          <Marker key={index} position={marker.position} clickable={true}/>
        )}
      </GoogleMap>
    );
    return(
      <MapWithASearchBox/>
    );
  }
}

export default Map;

