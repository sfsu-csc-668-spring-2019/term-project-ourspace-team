import { Map } from "../entity/MapEntity";
import { Place } from "../entity/PlaceEntity";
import { getConnection } from "typeorm";
export class MapRepo {

  saveMap(map: Map){
    return Map.save(map);
  }

  findMap(findid: number) {
    return Map.findOne( { where: { id: findid } } );
  }

  findPlacesRelation( id: number) {
    return Map.findOne(id, { relations: ["places"]});
  }

  deletePlacesRelation(place: Place, map: Map) {
    return getConnection()
      .createQueryBuilder()
      .relation(Map, "places")
      .of(map)
      .remove(place)
  }

  findPlacesRelation(id: number) {
    return Map.findOne(id, { relations: ["places"] });
  }
}