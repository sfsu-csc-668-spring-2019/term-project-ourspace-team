export default (place, saved) => {
 return `<div class="container">
          <div class="row">
            ${(place.icon === undefined ) ?  '' : `<div class="col-sm-6"><img class="img-responsive" style="width: 100%"src="${place.icon}" alt="Icon of Place"></div>`}
            <div class="col-sm-6">
                <div class="card-body">
                  <h5 class="card-title">${place.name}</h5>
                  <p class="card-text">${(place.address !== undefined ? place.address : 'Address: N/A')}</p>
                  <p class="card-text">${(place.phone !== undefined ? place.phone : 'Phone #: N/A')}</p>
                  <p class="card-text">${(place.price_level !== undefined ? "<strong>Price Range:</strong> " + "$".repeat(place.price_level) : 'Price Range: N/A')}</p>
                  <button class="btn btn-secondary" onclick=clickedViewMore(\'${place.place_id}\')>View Conversation</button>
                  ${ (saved === true) ? `<button class="btn btn-danger" onclick="clickedRemoveFromMap(\'${place.place_id}\')">Remove From Map</button>`: `<button class="btn btn-primary" onclick="clickedAddToMap(\'${place.place_id}\')">Add To Map</button>`}                
                </div>
              </div>
          </div>
        </div>`
}