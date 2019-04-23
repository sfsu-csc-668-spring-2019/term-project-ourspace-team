import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstname = "Timber";
    user.lastname = "Saw";
    user.username = "timSaW";
    user.password = "timizcool";
    await user.save();
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await User.find();
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
    
    const allUsers = await User.find();
    const firstUser = await User.findOne(1);
    const timber = await User.findOne({ firstname: "Timber", lastname: "Saw" });
    console.log("Removing user: " + timber);
    await timber.remove();
}).catch(error => console.log(error));