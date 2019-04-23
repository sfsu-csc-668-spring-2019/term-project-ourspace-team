import {Response, Request, NextFunction } from "express";
//import { userInfo } from "os";
import { User } from "../entities/User";
import { UserRepo } from "../repository/user-repository"

import "reflect-metadata";
import {createConnection} from "typeorm";


export let getHello = (req: Request, res: Response, next: NextFunction) => {
    console.log("got to hello");
    res.send({ express: "getHello"});
}

export let postWorld = (req: Request, res: Response, next: NextFunction) => {
    console.log("got to world");
    console.log(User.registerNewUser(req.body.username, req.body.password));
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
    console.log(req.body);

    let newUser:User = new User();
    newUser.name = req.body.name;
    newUser.password = req.body.password;
    newUser.email = "email@email.com";
    newUser.username = "jarekIzCool";

    userRepo.saveUser(newUser).then((result: any) => {
        console.log("Result: " + result);
        res.send(result);
    });
}