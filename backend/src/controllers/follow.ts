import { Response, Request, NextFunction} from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository";
import { FollowData } from "../logic/followData";

export class FollowController {

  userRepo: UserRepo = new UserRepo();

  async follow(req: Request, res: Response, next: NextFunction) {
    const followData: FollowData = new FollowData();

    const follower: number = req.body.follower;
    const toBeFollowed: number = req.body.toBeFollowed;

    const localFollower: User = await User.findOne({where: {id: follower} });
    const localFollowed: User = await User.findOne({where:{id: toBeFollowed}});
    
    const createFollow = await followData.setFollow(localFollower, localFollowed);
        
    User.save(createFollow);
  }
}