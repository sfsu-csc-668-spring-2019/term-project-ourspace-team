import { Response, Request, NextFunction } from "express";
import { UserRepo } from "../repository/user-repository";
import { User } from "../entity/UserEntity";
import { json } from "body-parser";



import "reflect-metadata";


export class SearchController {

    async returnAllUsers(req: Request, res: Response, next: NextFunction) {
        const userRepo: UserRepo = new UserRepo();
        const usersArray: User[] = await userRepo.getAllUsers();
        res.send(JSON.stringify(usersArray));
    }

    async returnSearchUsers(req: Request, res: Response, next: NextFunction) {
        const userRepo: UserRepo = new UserRepo();
        const usersArray: User[] = await userRepo.findSpecificUser(req.body.searchQuery);
        console.log('the return: ' + usersArray);
        res.send(JSON.stringify(usersArray));
    }

}
