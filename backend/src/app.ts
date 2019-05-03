import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";

import "reflect-metadata";
import {createConnection} from "typeorm";

import * as loginController from "./controllers/login";
import * as registrationController from "./controllers/registration";
import * as passportConfig from "./config/passport";

dotenv.config({path: ".env.example"});

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'keyboard cat',
  proxy: true,
  cookie: {
  }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/login", loginController.tryToLogin);
app.post("/register", registrationController.saveNewUser);
app.post("/addPlaceToMap",);
app.get("/getMaps",);
app.post("/searchUser",);


createConnection().then(async connection => {
  console.log("Connected to DB");
}).catch(error => console.log("TypeORM connection error: ", error));

export default app;