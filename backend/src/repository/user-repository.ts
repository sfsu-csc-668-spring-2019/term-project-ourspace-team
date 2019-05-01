import { User } from "../entity/UserEntity";
import { json } from "body-parser";
// import bcrypt from "bcrypt-nodejs";
 
export class UserRepo {
 
    saveUser(user: User) { 
        return User.save(user);
    }

    doesUserAlreadyExist(username, email): Promise<User[]> {
       return User.find({
           where: [ 
                {username: username}, 
                {email: email}
            ]
        }).then((data) => {
            return data;
        }).catch((e) => {console.log(`this is the e: ${e}`); return [];});
    }
 
}