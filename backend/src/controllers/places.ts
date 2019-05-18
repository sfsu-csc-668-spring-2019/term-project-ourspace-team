import { Response, Request, NextFunction } from "express";

import { Map } from "../entity/MapEntity";
import { Place } from "../entity/PlaceEntity";

import { MapRepo } from "../repository/map-repository";
import { PlaceRepo } from "../repository/place-repository";

export class PlaceController {

  //add place to auth user map x
  async newPlaceForMap(req: Request, res: Response, next: NextFunction) {
    //requires place information and map id
    //Responded with success message or updated map

    const place: Place = new Place();
    const mapRepo: MapRepo = new MapRepo();
    const placeRepo: PlaceRepo = new PlaceRepo();

    const id = req.body.id;
    const tempMap: Map = await mapRepo.findMap(id);

    place.place_id = req.body.place.place_id;
    place.name = req.body.place.name;
    place.address = req.body.place.address;
    place.latitude = req.body.place.lat;
    place.longitude = req.body.place.lng;
    place.phone = req.body.place.phone;
    place.photos = req.body.place.photos;
    place.icon = req.body.place.icon;

    const tempPlace: Place = await placeRepo.findOneOrAddPlace(place);
    console.log("Temp Place------");
    console.log(tempPlace);
    console.log("Temp Map Places--------");
    console.log(tempMap.places)

    if (tempMap.places === null || tempMap.places.length === 0) {
      tempMap.places = [tempPlace];
    } else {
      tempMap.places.concat([tempPlace]);
    }

    const newMap = await mapRepo.saveMap(tempMap);

    console.log("New Map------");
    console.log(newMap);

    res.send("New Place for Map"); //or send back new updated map?
  }

  //remove place from auth user map x
  async removePlaceFromMap(req: Request, res: Response, next: NextFunction) {
    //take id from map
    //take id from place
    //remove the connection from place or map
    res.send("Under Construction");
  }

  //getplaces from map
  async getPlacesFromMap(req: Request, res: Response, next: NextFunction){
    const id = req.body.mapId;
    const map: Map = await Map.findOne( { where: { id: id }, relations: ['places'] } );
    res.send(map.places);
  }

  //getplaces from maps from user
  async getPlacesFromUserMaps(req: Request, res: Response, next: NextFunction){
    res.send("");
  }

  async removePlaceMapConnection(req: Request, res: Response, next:NextFunction){
    res.send("");
  }
}