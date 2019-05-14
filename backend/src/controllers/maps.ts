import { Response, Request, NextFunction} from "express";
import { Map } from "../entity/MapEntity";
import { Place } from "../entity/PlaceEntity";
import { User } from "../entity/UserEntity";

import { MapRepo } from "../repository/map-repository";
import { UserRepo } from "../repository/user-repository";
import { PlaceRepo } from "../repository/place-repository";

import * as bcrypt from 'bcryptjs';
import "reflect-metadata";
import { hash } from "bcrypt-nodejs";
import { userInfo } from "os";

export class MapController {

    async getPlacesFromMap(req: Request, res: Response, next: NextFunction){
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

    //add place to auth user map x
    async newPlaceForMap(req: Request, res: Response, next: NextFunction){
        //requires place information and map id
        //Responded with success message or updated map

        const reqPlace: Place = new Place();
        const mapRepo: MapRepo = new MapRepo();
        const placeRepo: PlaceRepo = new PlaceRepo();
        
        const id = req.body.mapId;
        const tempMap: Map = await mapRepo.findMap(id);

        reqPlace.place_id = req.body.place_id;
        reqPlace.name = req.body.name;
        reqPlace.address = req.body.address;
        reqPlace.latitude = req.body.lat;
        reqPlace.longitude = req.body.lng;
        reqPlace.phone = req.body.phone;
        reqPlace.photos = req.body.photos;
        reqPlace.icon = req.body.icon;
        const tempPlace: Place = await placeRepo.findOneOrAddPlace(reqPlace);
        
        if (tempMap.places == null) {
            tempMap.places = [tempPlace];
        } else {
            tempMap.places.concat([tempPlace]);
        }

        await mapRepo.saveMap(tempMap);

        console.log();
        
        res.send("New Place for Map"); //or send back new updated map?
    }


    //remove place from auth user map x
    async removePlaceFromMap(req: Request, res: Response, next: NextFunction){
        res.send("Under Construction");
    }
}
