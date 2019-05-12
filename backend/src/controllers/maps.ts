import { Response, Request, NextFunction} from "express";
import { Map } from "../entity/MapEntity";
import { Place } from "../entity/PlaceEntity";
import { MapRepo } from "../repository/map-repository";

import "reflect-metadata";

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
