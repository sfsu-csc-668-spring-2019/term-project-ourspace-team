import { MapPlace } from "../entity/MapPlaceEntity";

export class MapPlaceRepo {
  saveMapPlace(mapPlace: MapPlace) {
    return MapPlace.save(mapPlace)
  }
}