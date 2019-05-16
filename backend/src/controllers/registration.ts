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

    console.log("Received Save User => POST");
    let user = await userRepo.doesUserAlreadyExist(username, email);
    if (user.length === 0){
      const newUser: User = new User();
      const hashPassword = await bcrypt.hash(password, 10);

      newUser.name = name;
      newUser.username = username;
      newUser.email = email;
      newUser.password = hashPassword;

      userRepo.saveUser(newUser);
      
      //Add 1st map for new User
      const newMap: Map = new Map();
      const map = await mapRepo.saveMap(newMap);
  
      if (newUser.maps == null){
        newUser.maps = [newMap];
      } else {
        newUser.maps.concat([newMap]);
      }
      const value = await userRepo.saveUser(newUser);
  
      return console.log('User created!');
    }else if (user.length > 0) {
      if(user[0].username == username) {
        return console.log(`User: ${username} is taken`);
      }

      if(user[0].email == email){
        return console.log(`E-mail: ${email} is taken`);
      }
    } else {
      return console.log('something is broken');
    }
  }
}