import { Place } from "../entity/PlaceEntity";

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