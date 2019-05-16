import { Response, Request, NextFunction} from "express";
import { UserRepo } from "../repository/user-repository";
import { json } from "body-parser";



import "reflect-metadata";


export class SearchController{
    
    async returnAllUsers(req: Request, res: Response, next: NextFunction){
        let UserRepo= new UserRepo;
        const UsersArray = await UserRepo.getAllUsers();
        res.send(JSON.stringify(UsersArray));
    }

    async returnSearchUsers(req: Request, res: Response, next: NextFunction){
        let UserRepo = new UserRepo;
        const UsersArray = await UserRepo.findSpecificUser(req.body.searchQuery);
        console.log('the return: '+ UsersArray);
        res.send(JSON.stringify(UsersArray));
    }

}
