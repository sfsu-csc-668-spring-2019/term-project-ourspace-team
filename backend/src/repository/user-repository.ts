import { User } from "../entity/UserEntity";
import { json } from "body-parser";

import { getRepository, Like, getConnection, getManager } from "typeorm";
import { Entity, EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepo extends Repository<User> {

  saveUser(user: User) {
    return User.save(user);
  }

  doesUserAlreadyExist(username, email): Promise<User[]> {
    return User.find({
        where: [{
          username: username,
          email: email, 
        }],
      }).then((data) => {
        return data;
      }).catch((e) => { 
        console.log("Error ${e}"); 
        return []; 
      });
  }

  findUserSigningIn(username): Promise<User[]> {
    return User.find({
        where: [{
          username: username,
        }]
      }).then((data) => {
        return data;
      }).catch((e) => { console.log("Error: ${e}"); return []; });
  }

  getAllUsers(): Promise<User[]> {
    const userlist = getRepository(User)
      .createQueryBuilder("user")
      .select(["user.id", "user.name", "user.username", "user.email",])
      .getMany();
    return userlist;
  }

  //percent like users
  findSpecificUser(name): Promise<User[]> {
    const userlist = getRepository(User)
      .createQueryBuilder("user")
      .select(["user.id", "user.name", "user.username", "user.email"])
      .where("LOWER(username) LIKE :username", { username: `%${name.toLowerCase()}%` })
      .getMany();
    return userlist;
  }
  establishFollow (follower: User, toBeFollowed: User) {
    return getConnection()
      .createQueryBuilder()
      .relation(User, "follow")
      .of(follower)
      .add(toBeFollowed);
  }

  removeFollow(follower: User, toBeUnfollowed: User) {
    return getConnection()
      .createQueryBuilder()
      .relation(User, "follow")
      .of(follower)
      .remove(toBeUnfollowed);
  }

  countFollowers(user: User) {
    const manager = getManager();
    return manager.query('SELECT COUNT(*) FROM user_follow_user WHERE "userId_2" = ' + user.id);
  }

  countFollowing(user: User) {
    const manager = getManager();
    return manager.query('SELECT COUNT(*) FROM user_follow_user WHERE "userId_1" = ' + user.id);
  }
}