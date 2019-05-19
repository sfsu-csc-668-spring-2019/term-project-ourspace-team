import { Place } from "../entity/PlaceEntity";
import { json } from "body-parser";
import { getRepository } from "typeorm";
import { map } from "async";

export class PlaceRepo {

  savePlace(place: Place) {
    //console.log(place);
    return Place.save(place);
  }

  findOneOrAddPlace(place: Place) {

    const isPlace = Place.findOne({ where: { place_id: place.place_id } })
    if (isPlace == undefined) {
      return this.savePlace(place);
    } else {
      return isPlace
    }
  }

  // topFivePlaces(): Promise<Place[]> {
  //   const topFiveList = createQueryBuilder("place", "map")
  //     .innerJoin("place", "map")
  //     .where({
  //       "place.id",
  //     })
  //     .select("*")
  //     .where()
  //   return topFiveList;
  // }

}