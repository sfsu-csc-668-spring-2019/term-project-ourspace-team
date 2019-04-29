import { User } from "../entity/UserEntity";
import bcrypt from "bcrypt-nodejs";
 
export class UserRepo {
 
    saveUser(user: User) { 
        return User.save(user);
    }

    doesUserAlreadyExist(username){
        console.log(User.find(username));
        return false;
        //return User.find(username);
    }
 
}