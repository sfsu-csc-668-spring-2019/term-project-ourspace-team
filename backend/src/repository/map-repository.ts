import { Map } from "../entity/MapEntity";
import { json } from "body-parser";
 
export class MapRepo {
    saveMap(map: Map){
        return Map.save(map)
    }

    updateMap(map: Map){
        //return Map.update(map);
    }

    findMap(){

    }
}