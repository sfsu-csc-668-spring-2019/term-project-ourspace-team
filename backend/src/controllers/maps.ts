import { Response, Request, NextFunction} from "express";
import { Map } from "../entity/MapEntity";
import { Place } from "../entity/PlaceEntity";

import { User } from "../entity/UserEntity";
import * as bcrypt from 'bcryptjs';

import { MapRepo } from "../repository/map-repository";
import { UserRepo } from "../repository/user-repository";

import "reflect-metadata";
import { hash } from "bcrypt-nodejs";

export class MapController {

    async addPlace(req: Request, res: Response, next: NextFunction){
        res.send("Work in Progress");
    }

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

        newUser2.name = "jarek2";
        newUser2.username = "jarek2";
        newUser2.email = "jarek2@stuff.com";
        newUser2.password = hashPassword;
        userRepo.saveUser(newUser2);

        const newMap: Map = new Map();
        newMap.user = newUser2;
        mapRepo.saveMap(newMap);


        //Map.save(newMap);
        //User.save(newUser2);

        res.send("Info in console");
        

    }

    async examplePlace(req: Request, res: Response, next: NextFunction){
        res.send("place example route working");
    }
    

}
