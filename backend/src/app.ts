import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";

import "reflect-metadata";
import {createConnection} from "typeorm";


import * as passportConfig from "./config/passport";

import {HomepageController} from "./controllers/homepage";
import {LoginController} from "./controllers/login";
import {RegistrationController} from "./controllers/registration";
import {MapController} from "./controllers/maps";

dotenv.config({path: ".env.example"});

const app = express();
const loginManager = new LoginController();
const registerManager = new RegistrationController();
const homepageManager = new HomepageController();
const mapManager = new MapController();


app.set("port", process.env.PORT || 5000);

//Session secure is default
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'qopiewuropquierkjhdsfd',
  //cookie: {secure: true}
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", homepageManager.indexpage);
app.post("/login", loginManager.login);
app.get("/logout", passportConfig.isAuthenticated, loginManager.logout);
//app.post("/logout", passportConfig.isAuthenticated, loginManager.logout);
app.post("/register", registerManager.saveNewUser);
app.get("/exampleAuth", passportConfig.isAuthenticated, homepageManager.exampleget);

app.get("/get", passportConfig.isAuthenticated, mapManager.getPlacesFromMap);
app.post("/addPlaceToMap", passportConfig.isAuthenticated, mapManager.newPlaceForMap);
app.post("/addMapToUser", passportConfig.isAuthenticated, mapManager.newMapForAuthUser);

//app.post("/putCommentOnPlace")
//app.get("/getCommentsForPlace")



createConnection().then(async connection => {
  console.log("Connected to DB");
}).catch(error => console.log("TypeORM connection error: ", error));

export default app;