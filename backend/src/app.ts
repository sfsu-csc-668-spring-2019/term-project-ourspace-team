import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";

import "reflect-metadata";
import {createConnection} from "typeorm";

import {LoginObject} from "./controllers/login";
import {Registration} from "./controllers/registration";

dotenv.config({path: ".env.example"});

const app = express();
const loginManager = new LoginObject();
const registerManager = new Registration();

app.set("port", process.env.PORT || 5000);

//app.use(session({ secret: SESSION_SECRET}));
//app.use(passport.initialize());
//app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/login", loginManager.login);
app.post("/register", registerManager.saveNewUser);

createConnection().then(async connection => {
  console.log("Connected to DB");
}).catch(error => console.log("TypeORM connection error: ", error));

export default app;