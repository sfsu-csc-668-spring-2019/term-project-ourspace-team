import { Response, Request, NextFunction} from "express";
import { Map } from "../entity/MapEntity";
import { User } from "../entity/UserEntity";

import { MapRepo } from "../repository/map-repository";
import { UserRepo } from "../repository/user-repository";

import "reflect-metadata";

export class MapController {

  async getMyMaps(req: Request, res: Response, next: NextFunction){
  const userid: number = req.user.id;
  const localuser: User = await User.findOne({where: {id: userid} });
  res.send(localuser.maps);
  }

  //add map to auth user
  async newMapForAuthUser(req: Request, res: Response, next: NextFunction){
  //requires user id from authenticated user
  //respondes with nothing or returning updated user

  const userid: number = req.user.id;
  
  const localuser: User = await User.findOne({where: {id: userid} });

  const newMap: Map = new Map();
  const mapRepo: MapRepo = new MapRepo();
  const userRepo: UserRepo = new UserRepo();

  const map = await mapRepo.saveMap(newMap);

  if (localuser.maps == null){
    localuser.maps = [newMap];
  } else {
    localuser.maps.concat([newMap]);
  }

  const value = await userRepo.saveUser(localuser);

  res.send("New Map for Auth User");
  }

}
