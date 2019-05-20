import { Map, MapType } from "../entity/MapEntity";
import { json } from "body-parser";
import { getRepository, getConnection } from "typeorm";

export class MapRepo {

  saveMap(map: Map) {
    return Map.save(map);
  }

  updateMap(map: Map) {
    //return Map.update(map);
  }

  findMap(findid: number){
    return Map.findOne( { where: { id: findid } } );
  }

  findPlacesRelation( id: number) {
    return Map.findOne(id, { relations: ["places"]});
  }
  
  findPlacesRelation(id: number) {
    return Map.findOne(id, { relations: ["places"] });
  }

  //If time change to changeMapType with extra parameter
  makeMapNORMAL(mapid: number) {
    getRepository(Map)
      .createQueryBuilder()
      .update(Map)
      .set({ type: MapType.NORMAL })
      .where("id = :id", { id: mapid })
      .execute();
  }

  makeMapTrending(mapid: number) {
    getRepository(Map)
      .createQueryBuilder()
      .update(Map)
      .set({ type: MapType.TRENDING })
      .where("id = :id", { id: mapid })
      .execute();
  }

  makeMapHot(mapid: number) {
    getRepository(Map)
      .createQueryBuilder()
      .update(Map)
      .set({ type: MapType.HOT })
      .where("id = :id", { id: mapid })
      .execute();
  }

}