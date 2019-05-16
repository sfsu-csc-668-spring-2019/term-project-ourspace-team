import { Response, Request, NextFunction} from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository";
import { FollowLogic } from "../logic/followLogic";

export class FollowController {

  userRepo: UserRepo = new UserRepo();

  async follow(req: Request, res: Response, next: NextFunction) {
    const followData: FollowLogic = new FollowLogic();

    const follower: number = req.body.follower;
    const toBeFollowed: number = req.body.toBeFollowed;

    const localFollower: User = await User.findOne( {where: {id: follower}} );
    const localToBeFollowed: User = await User.findOne( {where: {id: toBeFollowed}} );
    
    const createFollow = await followData.setFollow(localFollower, localToBeFollowed);
        
    User.save(createFollow);
  }
}