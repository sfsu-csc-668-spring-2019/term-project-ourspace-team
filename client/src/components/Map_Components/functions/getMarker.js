export default (map, place) => {
  return new window.google.maps.Marker({
    position: {
      lat: place.lat,
      lng: place.lng
    },
    map: map,
    title: place.name,
  });
}