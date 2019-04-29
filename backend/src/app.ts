import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import dotenv from "dotenv";

import "reflect-metadata";
import {createConnection} from "typeorm";

import * as loginController from "./controllers/login";
import * as registrationController from "./controllers/registration";

dotenv.config({path: ".env.example"});

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/login", loginController.getAllUsers);
app.post("/register", registrationController.saveNewUser);

createConnection().then(async connection => {
  console.log("Connected to DB");
}).catch(error => console.log("TypeORM connection error: ", error));

export default app;