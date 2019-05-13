import { Place } from "../entity/PlaceEntity";
import { json } from "body-parser";
 
export class PlaceRepo {

    savePlace(place: Place){
        //console.log(place);
        return Place.save(place);
    }

    findOneOrAddPlace(place: Place){
        
    }

}