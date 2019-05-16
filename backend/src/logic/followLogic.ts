import { User } from "../entity/UserEntity";

export class FollowLogic {

  async setFollow (follower: User, toBeFollowed: User) {
    
    if(follower.follow == null) {
        follower.follow = [toBeFollowed];
    } else {
        follower.follow.concat([toBeFollowed]);
    }
    return follower;
  }
}