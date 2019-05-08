import { Response, Request, NextFunction, response } from "express";
import { Map } from "../entity/MapEntity";
import { Place } from "../entity/PlaceEntity";
import { MapRepo } from "../repository/map-repository";
import * as bcrypt from 'bcryptjs';

import "reflect-metadata";
import passport from "passport";
import "../config/passport";
import { doesNotReject } from "assert";
import { IVerifyOptions } from "passport-local";
import request = require("request");

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
    

}
