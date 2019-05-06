export default ( sfPosition, zoom) => {
  return new window.google.maps.Map(document.getElementById('map'), {
    center: sfPosition,
    zoom: zoom,
    clickableIcons: false,
    mapTypeControl: false
  });
}