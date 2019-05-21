export default (map, place) => {
  return new window.google.maps.Marker({
    position: {
      lat: Number(place.latitude),
      lng: Number(place.longitude)
    },
    map: map,
    title: place.name,
  });
}