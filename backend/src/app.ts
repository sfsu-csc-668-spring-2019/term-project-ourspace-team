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

import {SearchController} from "./controllers/search";
import {PlaceController} from "./controllers/places";
import {CommentController} from "./controllers/comments";
import {FollowController} from "./controllers/follow";


dotenv.config({path: ".env.example"});

const app = express();
const loginManager = new LoginController();
const registerManager = new RegistrationController();
const homepageManager = new HomepageController();
const mapManager = new MapController();

const searchManager = new SearchController();
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

//non authenticated routes
app.get("/", homepageManager.indexPage);
app.post("/login", loginManager.login);
app.post("/register", registerManager.saveNewUser);
app.post("/getPlacesFromMap", placeManager.getPlacesFromMap);

//authenticated routes
//login
app.post("/logout", passportConfig.isAuthenticated, loginManager.logout);

app.get("/getUserMaps", passportConfig.isAuthenticated, mapManager.getUserMaps);
app.get("/getUserMaps", passportConfig.isAuthenticated, mapManager.getUserMaps);
app.post("/addPlaceToMap", passportConfig.isAuthenticated, placeManager.newPlaceForMap);
app.post("/removePlaceFromMap", passportConfig.isAuthenticated, placeManager.removePlaceMapConnection);

app.post("/removeMap", passportConfig.isAuthenticated, mapManager.removeMap);
app.post("/addMapToUser", passportConfig.isAuthenticated, mapManager.newMapForAuthUser);

app.get("/getComments", passportConfig.isAuthenticated, commentManager.getComments);
app.post("/putCommentOnPlace", passportConfig.isAuthenticated, commentManager.addCommentToPlace);
app.get("/removeComment", passportConfig.isAuthenticated, commentManager.removeComment);

app.post("/follow", passportConfig.isAuthenticated, followManager.follow);
app.post("/unfollow", passportConfig.isAuthenticated, followManager.unfollow);
app.post("/followers", passportConfig.isAuthenticated, followManager.followers);
app.post("/following", passportConfig.isAuthenticated, followManager.following);

app.get("/search", passportConfig.isAuthenticated,searchManager.returnAllUsers);
app.post("/search/like",  passportConfig.isAuthenticated, searchManager.returnSearchUsers);
app.get("/search", passportConfig.isAuthenticated,searchManager.returnAllUsers); //make check authentication
app.get("/makeMapTrending", passportConfig.isAuthenticated, mapManager.changeMapToTrending);

//uncomment and hit to create local db for testing
//app.get("/createDB", homepageManager.createTablesWithDummyData);

createConnection().then(async connection => {
  console.log("Connected to DB");
}).catch(error => console.log("TypeORM connection error: ", error));

export default app;
