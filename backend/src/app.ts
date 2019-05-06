import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";

import "reflect-metadata";
import {createConnection} from "typeorm";


import * as passportConfig from "./config/passport";

import {Homepage} from "./controllers/homepage";
import {LoginObject} from "./controllers/login";
import {Registration} from "./controllers/registration";


dotenv.config({path: ".env.example"});

const app = express();
const loginManager = new LoginObject();
const registerManager = new Registration();
const homepageManager = new Homepage();

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
app.post("/register", registerManager.saveNewUser);
app.post("/addPlaceToMap",);
app.get("/getMaps",);
app.post("/searchUser",);

createConnection().then(async connection => {
  console.log("Connected to DB");
}).catch(error => console.log("TypeORM connection error: ", error));

export default app;