import { Response, Request, NextFunction} from "express";
import { UserRepo } from "../repository/user-repository";
import { json } from "body-parser";



import "reflect-metadata";


export class SearchController{
    
    async returnAllUsers(req: Request, res: Response, next: NextFunction){
        let userRepo= new UserRepo;
        const usersArray = await userRepo.getAllUsers();
        res.send(JSON.stringify(usersArray));
    }

    async returnPercentLikeUsers(req: Request, res: Response, next: NextFunction){
        let userRepo = new UserRepo;
        const usersArray = await userRepo.findSpecificUser(req.body.searchQuery);
        console.log('the return: '+ usersArray);
        res.send(JSON.stringify(usersArray));
    }

}