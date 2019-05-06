import { Response, Request, NextFunction, response } from "express";
// import { User } from "../entity/UserEntity";
// import { UserRepo } from "../repository/user-repository";
// import * as bcrypt from 'bcryptjs';

// import "reflect-metadata";
// import passport from "passport";
// import "../config/passport";
// import { doesNotReject } from "assert";
// import { IVerifyOptions } from "passport-local";

export class Homepage {

    //get "/""
    async indexpage(req: Request, res: Response, next: NextFunction) {
        console.log(req.user);
        console.log(req.isAuthenticated());
    }
}
