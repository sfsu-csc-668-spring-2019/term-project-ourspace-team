import { User } from "../entity/UserEntity";
import { json } from "body-parser";
import { getRepository, Like } from "typeorm";

export class UserRepo {

    saveUser(user: User) {
        return User.save(user);
    }

    doesUserAlreadyExist(username, email): Promise<User[]> {
        return User.find({
            where: [
                { username: username },
                { email: email }
            ]
        }).then((data) => {
            return data;
        }).catch((e) => { console.log(`this is the e: ${e}`); return []; });
    }

    getAllUsers(): Promise<User[]> {
        const userlist = getRepository(User)
            .createQueryBuilder("user")
            .select(["user.id", "user.name", "user.email",])
            .getMany();
        return userlist;
    }
    
    //percent like users
    findSpecificUser(nameToSearch): Promise<User[]> {
        const userlist = getRepository(User)
            .find({
                username: Like(nameToSearch)
            });
        console.log(userlist);
        return userlist;
    }
    
    //user as reference
    getAllUsersInformation(): Promise<User[]> {
        //code below gets all information from all users
        const list = getRepository(User)
            .createQueryBuilder()
            .select("*")
            .from(User, "*")
            .getMany();
        return list;
    }

    findUser(searchField: string) {
        /* 
        Authentication could be required

        search for user based on:
            username
            email
            user

        return array of users that fit this criteria
        */
    }

}
