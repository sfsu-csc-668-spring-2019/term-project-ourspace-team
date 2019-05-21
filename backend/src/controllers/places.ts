import { Response, Request, NextFunction } from "express";

import { Map } from "../entity/MapEntity";
import { Place } from "../entity/PlaceEntity";
import { MapRepo } from "../repository/map-repository";
import { PlaceRepo } from "../repository/place-repository";

export class PlaceController {

  //add place to auth user map x
  async newPlaceForMap(req: Request, res: Response, next: NextFunction) {
    // Adds a new MapPlace to Map
    const mapId = req.body.mapId;
    console.log(mapId);
    const mapRepo: MapRepo = new MapRepo();
    const tempMap: Map = await mapRepo.findPlacesRelation(mapId);

    const place: Place = new Place();
    const placeRepo: PlaceRepo = new PlaceRepo();

    // Create new Place Object to search or add to DB
    place.place_id = req.body.place.place_id;
    place.name = req.body.place.name;
    place.address = req.body.place.address;
    place.latitude = req.body.place.latitude;
    place.longitude = req.body.place.longitude;
    place.phone = req.body.place.phone;
    place.photos = req.body.place.photos;
    place.icon = req.body.place.icon;

    // Check for Existence of place in Place Repo
    const foundPlace: Place = await placeRepo.findOneOrAddPlace(place);
    tempMap.places.push(foundPlace);
    await mapRepo.saveMap(tempMap);

    // Change this to something useful later
    res.send("We gottem");
  }

  //get: places from map
  async getPlacesFromMap(req: Request, res: Response, next: NextFunction) {
    const id = req.body.mapId;
    const map: Map = await Map.findOne({ where: { id: id }, relations: ['places'] });
    res.send(map.places);
  }

  //post: remove place from map
  async removePlaceMapConnection(req: Request, res: Response, next:NextFunction) {
    const placeId: number = req.body.place_id;
    const mapId: number = req.body.map_id;
    const mapRepo: MapRepo = new MapRepo();

    const map = await Map.findOne({where: { id: mapId }, relations: ['places']});
    const place = await Place.findOne ({where: { id: placeId }});
    
    await mapRepo.deletePlacesRelation(place, map);

    res.send("Place map connection disconnected.");
  }

  async getTrendingPlaces(req: Request, res: Response, next:NextFunction){
    const placeRepo: PlaceRepo = new PlaceRepo;
    const topFive = await placeRepo.topFivePlaces();

    res.status(200).send(topFive);
  }

}