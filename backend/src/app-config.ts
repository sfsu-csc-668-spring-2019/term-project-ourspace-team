import "reflect-metadata";
import {ConnectionOptions} from "typeorm";
 
 export let dbOptions: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "hello",
    database: "mapspace",
    entities: [
         "./entities/*.js"
    ],
    synchronize: true,
}