
import { User } from "../entity/UserEntity";
 
export class UserRepo {
 
    getUsers() {
        // get Employee repository and find all employees
        return User.find();
    }
 
    saveUser(user: User) { 
        return User.save(user);
    }

    doesUserAlreadyExist(username){
        console.log(User.find(username));
        return false;
        //return User.find(username);
    }
 
}