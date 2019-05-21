import { Response, Request, NextFunction } from "express";
import { UserRepo } from "../repository/user-repository";
import { User } from "../entity/UserEntity";
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
        res.send(JSON.stringify(usersArray));
    }
}
