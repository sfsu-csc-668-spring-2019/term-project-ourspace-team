import { Response, Request, NextFunction, response} from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository";

export class FollowController {

  async follow(req: Request, res: Response, next: NextFunction) {
    const userRepo: UserRepo = new UserRepo();

    const follower: string = req.body.follower;
    const toBeFollowed: string = req.body.toBeFollowed;

    const localFollower: User = await User.findOne( {where: {username: follower}} );
    const localToBeFollowed: User = await User.findOne( {where: {username: toBeFollowed}} );

  
  
    userRepo.establishFollow(localFollower, localToBeFollowed)
      .then(response => {
        res.status(200);
      }).catch(error => {
        res.status(201).json({errorMessage:"Couldn't Follow"});
      })
  }

  async unfollow(req: Request, res: Response, next: NextFunction) {
    const userRepo: UserRepo = new UserRepo();

    const follower: string = req.body.follower;
    const toBeUnfollowed: string = req.body.toBeUnfollowed;

    const localFollower: User = await User.findOne( {where: {username: follower}} );
    const localToBeUnfollowed: User = await User.findOne( {where: {username: toBeUnfollowed}} );

      userRepo.removeFollow(localFollower, localToBeUnfollowed)
      .then(response => {
        res.status(200);
      }).catch(error => {
        res.status(201).json({errorMessage:"Couldn't Follow"});
      })
  }

  // async followers(req: Request, res: Response, next: NextFunction){
  //   const followQueries: FollowQueries = new FollowQueries();
  //   const user: number = 1;
  //   const localUser: User = await User.findOne( {where: {id: user}} );

  //   followQueries.countFollowers(localUser)
  //   .then(response => {
  //     console.log(response)
  //   }).catch(error =>{
  //     console.error(error)
  //   });
  // }
}