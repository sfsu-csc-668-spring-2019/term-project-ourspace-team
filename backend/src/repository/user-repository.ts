import { User } from "../entity/UserEntity";
import { json } from "body-parser";
import { Entity, EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepo extends Repository<User> {

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

    findUser(searchField: string){
        /* 
        Authentication could be required

        search for user based on:
            username
            email
            user

        return array of users that fit this criteria
        */
    }
    
    findSpecificUser(){
        /*
        Authentication should be required

        find a single user based on username, email, id, name
        return this user array
        */
    }
}