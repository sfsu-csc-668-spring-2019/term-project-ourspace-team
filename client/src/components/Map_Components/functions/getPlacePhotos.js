export default (place) => {
  let place_photos = [];

  if(place.photos === undefined ) {
    return undefined;
  }

  place.photos.forEach((photo) => {
    place_photos.push(photo.getUrl());
  });

  return place_photos;
}