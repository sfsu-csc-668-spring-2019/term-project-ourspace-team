import { Place } from "../entity/PlaceEntity";
import { json } from "body-parser";
 
export class PlaceRepo {

  savePlace(place: Place){
    //console.log(place);
    return Place.save(place);
  }

  async findOneOrAddPlace(place: Place){
    const isPlace = await Place.findOne( { where: { place_id: place.place_id } } )
    if (isPlace === undefined){
      return this.savePlace(place);
    } else {
      return isPlace
    }
  }

}