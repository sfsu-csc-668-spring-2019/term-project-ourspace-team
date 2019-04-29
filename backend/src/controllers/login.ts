import {Response, Request, NextFunction } from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository"

import "reflect-metadata";


export let getHello = (req: Request, res: Response, next: NextFunction) => {
    console.log("got to hello");
    res.send({ express: "getHello"});
}

export let postWorld = async (req: Request, res: Response, next: NextFunction) => {
    console.log("got to world");
    res.send("I recieved your POST request. This is what you sent me: " + req.body.post + ", " + req.body.username + ", " + req.body.password);
}

export let getAllUsers = async (req: Request, res: Response) => {
    let userRepo: UserRepo = new UserRepo();
 
    console.log("Received GetAllEmployees ==> GET");
 
    userRepo.getUsers().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
 
 
};


export let saveNewUser = (req: Request, res: Response, next: NextFunction) => {
    let userRepo : UserRepo = new UserRepo();

    console.log("Received Save User => POST");
    console.log(req.body, req.body.post, req.body.username, req.body.password);

    let newUser:User = new User();
    newUser.name = 'jarek';
    newUser.password = req.body.password;
    newUser.email = 'email@email.com';
    newUser.username = req.body.username;

    userRepo.saveUser(newUser).then((result: any) => {
        console.log("Result: " + result);
        res.send(result);
    });
}