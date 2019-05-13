import { Response, Request, NextFunction} from "express";
import { Map } from "../entity/MapEntity";
import { Place } from "../entity/PlaceEntity";

import { User } from "../entity/UserEntity";
import * as bcrypt from 'bcryptjs';

import { MapRepo } from "../repository/map-repository";
import { UserRepo } from "../repository/user-repository";
import { PlaceRepo } from "../repository/place-repository";

import "reflect-metadata";
import { hash } from "bcrypt-nodejs";

export class MapController {

    async removePlace(req: Request, res: Response, next: NextFunction){
        res.send("Work in Progress");
    }

    async getPlacesFromMap(req: Request, res: Response, next: NextFunction){
        res.send("Work in Progress");
    }

    async exampleUser(req: Request, res: Response, next: NextFunction){
        res.send("user example route working");
        const newUser: User = new User();
        // const hashPassword = await bcrypt.hash("test", 10);

        // newUser.name = "jarek";
        // newUser.username = "jarek";
        // newUser.email = "jarek@stuff.com";
        // newUser.password = hashPassword;

        res.send("");

    }

    async exampleMap(req: Request, res: Response, next: NextFunction){
        const mapRepo: MapRepo = new MapRepo();
        const userRepo: UserRepo = new UserRepo();
        const newUser2: User = new User();
        const hashPassword = await bcrypt.hash("test", 10);

        newUser2.name = "jarek3";
        newUser2.username = "jarek3";
        newUser2.email = "jarek3@stuff.com";
        newUser2.password = hashPassword;
        const userEx = await userRepo.saveUser(newUser2);

        const newMap: Map = new Map();
        newMap.user = newUser2;
        const mapEx = await mapRepo.saveMap(newMap);

        console.log(userEx);
        console.log(mapEx);

        const newMap2: Map = new Map();
        newMap2.user = userEx;
        const mapAfter = await mapRepo.saveMap(newMap2);
        res.send("Info in console");
        

    }

    //add new place to map
    async addPlace(req: Request, res: Response, next: NextFunction){
        //get map

        //add place if doesnt exist in db

        res.send("Add Place Route");

    }


    //add new map to user
    async newMapForUser(req: Request, res: Response, next: NextFunction){

    }


    

}
