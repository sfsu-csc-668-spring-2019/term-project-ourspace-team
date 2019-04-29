import {Response, Request, NextFunction } from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository"

import "reflect-metadata";

export let tryToLogin = async (req: Request, res: Response, next: NextFunction) => {
    let userRepo: UserRepo = new UserRepo();
    console.log("Try to login");
    //console.log(req.body.username, req.body.password);
}