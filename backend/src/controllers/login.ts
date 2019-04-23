import {Response, Request, NextFunction } from "express";
//import { userInfo } from "os";
import { User } from "../models/User";

import "reflect-metadata";
import {createConnection} from "typeorm";
//import { Http2ServerResponse } from "http2";

export let getHello = (req: Request, res: Response, next: NextFunction) => {
    console.log("got to hello");
    res.send({ express: "getHello"});
}

export let postWorld = (req: Request, res: Response, next: NextFunction) => {
    console.log("got to world");
    //User.registerNewUser(req.body.username, req.body.password);
    //User.registerNewUser(req.body.username, req.body.password);
    /*createConnection().then(async connection => {    
        console.log("Inserting a new user into the database...");
        const user = new User();
        user.name = "Timber";
        user.email = "Saw";
        user.username = req.body.username;
        user.password = req.body.password;
        await user.save();
        console.log("Saved a new user with id: " + user.id);

        console.log("Loading users from the database...");
        const users = await User.find();
        console.log("Loaded users: ", users);
    }).catch(error => console.log(error));*/
    res.send("I recieved your POST request. This is what you sent me: " + req.body.post + ", " + req.body.username + ", " + req.body.password);
}