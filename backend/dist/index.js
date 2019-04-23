"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    console.log("Inserting a new user into the database...");
    const user = new User_1.User();
    user.firstname = "Timber";
    user.lastname = "Saw";
    user.username = "timSaW";
    user.password = "timizcool";
    yield user.save();
    console.log("Saved a new user with id: " + user.id);
    console.log("Loading users from the database...");
    const users = yield User_1.User.find();
    console.log("Loaded users: ", users);
    console.log("Here you can setup and run express/koa/any other framework.");
    const allUsers = yield User_1.User.find();
    const firstUser = yield User_1.User.findOne(1);
    const timber = yield User_1.User.findOne({ firstname: "Timber", lastname: "Saw" });
    console.log("Removing user: " + timber);
    yield timber.remove();
})).catch(error => console.log(error));
//# sourceMappingURL=index.js.map