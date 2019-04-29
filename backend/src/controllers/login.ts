import {Response, Request, NextFunction } from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository"

import "reflect-metadata";

export let getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    let userRepo: UserRepo = new UserRepo();
 
    userRepo.getUsers().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
 
 
};

export let tryToLogin = async (req: Request, res: Response, next: NextFunction) => {
    let userRepo: UserRepo = new UserRepo();
    console.log("Try to login");
}