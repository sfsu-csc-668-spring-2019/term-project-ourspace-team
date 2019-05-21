import { Response, Request, NextFunction } from "express";
import { Map } from "../entity/MapEntity";
import { User } from "../entity/UserEntity";
import { MapRepo } from "../repository/map-repository";
import "reflect-metadata";

export class MapController {

  async getUserMaps(req: Request, res: Response, next: NextFunction) {
    const userid: number = req.user.id;
    const localUser: User = await User.findOne( { where: {id: userid}, relations: ['maps'] } );
    
    res.send(JSON.stringify(localUser.maps));
  }

  //add map to auth user
  async newMapForAuthUser(req: Request, res: Response, next: NextFunction) {
    const userId: number = req.user.id;
    const newMap: Map = new Map();

    const localUser: User = await User.findOne({ where: { id: userId } });
    
    newMap.user = localUser;
    await Map.save(newMap);

    res.send("New Map for Auth User");
  }

  //remove map with map id
  async removeMap(req: Request, res: Response, next: NextFunction) {
    const mapId = req.body.map_id;
    const mapToRemove: Map = await Map.findOne({where: { id: mapId }});

    if (mapToRemove == undefined) {} else { await Map.remove(mapToRemove); }
    res.send("removeMap with id: " + mapId);
  }

  async changeMapToTrending(req: Request, res: Response, next: NextFunction) {
    const mapRepo: MapRepo = new MapRepo();
    const mapid: number = req.body.mapid;
    
    await mapRepo.makeMapTrending(mapid);
    res.status(200).send("Map is now Trending");
  }

}
