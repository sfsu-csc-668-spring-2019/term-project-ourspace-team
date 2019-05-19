import { Response, Request, NextFunction } from "express";
import { Map } from "../entity/MapEntity";
import { User } from "../entity/UserEntity";

import { MapRepo } from "../repository/map-repository";
import { UserRepo } from "../repository/user-repository";

import "reflect-metadata";

export class MapController {

  async getUserMaps(req: Request, res: Response, next: NextFunction) {
    const userid: number = req.user.id;
    //const userid: number = 3;
    const localUser: User = await User.findOne( { where: {id: userid}, relations: ['maps'] } );
    console.log(localUser.maps);
    res.send(localUser.maps);
  }

  //add map to auth user
  async newMapForAuthUser(req: Request, res: Response, next: NextFunction) {
    //requires user id from authenticated user
    const userId: number = req.user.id;
    const newMap: Map = new Map();

    const localUser: User = await User.findOne({ where: { id: userId } });
    
    newMap.user = localUser;
    const map = await Map.save(newMap);

    res.send("New Map for Auth User");
  }

  //remove map with map id
  async removeMap(req: Request, res: Response, next: NextFunction){
    const mapId = req.body.map_id;
    const mapToRemove: Map = await Map.findOne( { where: { id: mapId } } );

    if (mapToRemove == undefined) {} else {
      await Map.remove(mapToRemove);
    }

    res.send("removeMap with id: " + mapId);
  }

}
