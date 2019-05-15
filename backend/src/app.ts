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
import {PlaceController} from "./controllers/places";
import {CommentController} from "./controllers/comments";
import {FollowController} from "./controllers/follow";

dotenv.config({path: ".env.example"});

const app = express();
const loginManager = new LoginController();
const registerManager = new RegistrationController();
const homepageManager = new HomepageController();
const mapManager = new MapController();
const placeManager = new PlaceController();
const commentManager = new CommentController();
const followManager = new FollowController();

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

app.get("/getUserMaps", passportConfig.isAuthenticated, mapManager.getMyMaps);
app.post("/addPlaceToMap", passportConfig.isAuthenticated, placeManager.newPlaceForMap);
//app.post("/removePlaceFromMap", passportConfig.isAuthenticated, placeManager.removePlace);
app.post("/addMapToUser", passportConfig.isAuthenticated, mapManager.newMapForAuthUser);
app.get("/follow", followManager.follow);

//app.post("/putCommentOnPlace", passportConfig.isAuthenticated, commentManager.addCommentToPlace);
//app.get("/getCommentsForPlace", passportConfig.isAuthenticated, commentManager.getComments);
//app.get("/removeComment", passportConfig.isAuthenticated, commentManager.removeComment);



createConnection().then(async connection => {
  console.log("Connected to DB");
}).catch(error => console.log("TypeORM connection error: ", error));

export default app;