import { Response, Request, NextFunction} from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository";

export class FollowData {

  async setFollow (follower: User, followed: User){
    
    if(follower.follow == null){
        follower.follow = [followed];
    } else {
        follower.follow.concat([followed]);
    }
    return follower;
  }
}