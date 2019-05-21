import { Place } from "../entity/PlaceEntity";
import { getManager } from "typeorm";

export class PlaceRepo {

  savePlace(place: Place) {
    return Place.save(place);
  }


  async findOneOrAddPlace(place: Place) {
    const isPlace = await Place.findOne({where: { place_id: place.place_id }});
    if (isPlace === undefined) {
      return this.savePlace(place);
    } else {
      return isPlace
    }
  }
  
  //This function return the top 5 placeId that occur in the table map_places_place in descending order
  topFivePlaces(): Promise<Place[]> {
    const manager = getManager();
    return manager.query('SELECT "placeId", COUNT("placeId") AS "value_occurence" FROM map_places_place GROUP BY "placeId" ORDER BY "value_occurence" DESC LIMIT 5');
  }

}