import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import dotenv from "dotenv";


import * as loginController from "./controllers/login";

dotenv.config({path: ".env.example"});

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/hello", loginController.getHello);
app.post("/world", loginController.postWorld);


export default app;