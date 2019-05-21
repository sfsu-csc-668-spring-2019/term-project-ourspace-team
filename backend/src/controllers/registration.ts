import {Response, Request, NextFunction } from "express";
import { User } from "../entity/UserEntity";
import { Map } from "../entity/MapEntity";
import { UserRepo } from "../repository/user-repository";
import { MapRepo } from "../repository/map-repository";
import * as bcrypt from 'bcryptjs';

import "reflect-metadata";

export class RegistrationController {
  
  async saveNewUser(req: Request, res: Response, next: NextFunction) {
    const userRepo: UserRepo = new UserRepo();
    const mapRepo: MapRepo = new MapRepo();
    
    const username: string = req.body.username;
    const email : string = req.body.email;
    const password: any = req.body.password;
    const name : string = req.body.name;

    const user = await userRepo.doesUserAlreadyExist(username, email);

    if (user.length === 0) {

      const newUser: User = new User();
      const hashPassword: any = await bcrypt.hash(password, 10);

      newUser.name = name;
      newUser.username = username;
      newUser.email = email;
      newUser.password = hashPassword;

      userRepo.saveUser(newUser);
      
      //Add 1st map for new User
      const newMap: Map = new Map();
      await mapRepo.saveMap(newMap);
  
      newUser.maps = [newMap]
      await userRepo.saveUser(newUser);

      req.login(user[0], (err) => {
        res.status(200).json({
          id: req.user.id,
          name: req.user.name,
          username: req.user.username,
          email: req.user.email,
        });
      });
    } else if (user.length > 0) {

      if (user[0].username == username) {
        res.status(201).json({errorMessage: "Username Taken"});
      }

      if (user[0].email == email){
        res.status(201).json({errorMessage: "Email Taken"});
      }
      
    } else {
      res.status(201).json({errorMessage: "Ohhh, snap! What did you do!?"});
    }
  }
}