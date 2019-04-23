
import { User } from "../entities/UserEntity";
import { getManager } from "typeorm";
 
export class UserRepo {
 
    getUsers() {
        // get Employee repository and find all employees
        return getManager().getRepository(User).find();
    }
 
    saveUser(user: User) { 
          return getManager().getRepository(User).save(user);
    }
 
}