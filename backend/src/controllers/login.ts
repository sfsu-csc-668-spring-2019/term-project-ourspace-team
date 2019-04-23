import {Response, Request, NextFunction } from "express";
//import { Http2ServerResponse } from "http2";

export let getHello = (req: Request, res: Response, next: NextFunction) => {
    console.log("got to hello");
    res.send({ express: "PRAISE GOD THIS WORKS OMG IM CRYING => getHello"});
}

export let postWorld = (req: Request, res: Response, next: NextFunction) => {
    console.log("got to world");
    res.send("I recieved your POST request. This is what you sent me: " + req.body.post + ", " + req.body.username + ", " + req.body.password);
}