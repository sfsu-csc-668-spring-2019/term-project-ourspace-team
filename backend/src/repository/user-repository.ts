
import { User } from "../entity/UserEntity";
import { getManager } from "typeorm";
 
export class UserRepo {
 
    getUsers() {
        // get Employee repository and find all employees
        return User.find();
    }
 
    saveUser(user: User) { 
        return User.save(user);
    }
 
}