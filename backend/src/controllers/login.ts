/*const express = require('express');
const app = express.Router();

app.get('/hello', (req, res) => {
    console.log("api/hello hit");
    res.send({ express: 'Hello From Express' });
});

app.post('/world', (req, res) => {
    //console.log(req.body.post);
    console.log("/api/world hit");
    res.send("I recieved your POST request. This is what you sent me: " + req.body.post + ", " + req.body.username + ", " + req.body.password);
});

module.exports = app;*/

//import request from "request";
import {Response, Request, NextFunction } from "express";
import { Http2ServerResponse } from "http2";

export let getHello = (req: Request, res: Response) => {
    console.log("got to hello");
    res.send({ express: 'PRAISE GOD THIS WORKS OMG IM CRYING => getHello'});
}

export let getWorld = (req: Request, res: Response, next: NextFunction) => {
    console.log("got to world");
    res.send("I recieved your POST request. This is what you sent me: " + req.body.post + ", " + req.body.username + ", " + req.body.password);
}