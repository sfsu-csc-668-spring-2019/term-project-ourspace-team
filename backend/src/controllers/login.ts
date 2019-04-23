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
    console.log(User.registerNewUser(req.body.username, req.body.password));
    res.send("I recieved your POST request. This is what you sent me: " + req.body.post + ", " + req.body.username + ", " + req.body.password);
}