import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as cookieParser from 'cookie-parser';
import * as dotenv from "dotenv";


import * as loginController from "./controllers/login";

dotenv.config({path: ".env.example"});

var app = express();

app.set("port", process.env.PORT || 5000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  };
  console.log('Listening on port ' + 5000);
});

app.get("/hello", loginController.getHello);
app.post("/world", loginController.postWorld);


export default app;