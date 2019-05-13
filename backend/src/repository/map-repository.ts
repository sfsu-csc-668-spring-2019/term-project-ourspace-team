import { Map } from "../entity/MapEntity";
import { json } from "body-parser";
 
export class MapRepo {
    saveMap(map: Map){
        return Map.save(map)
    }

    findMap(){
        
    }
}