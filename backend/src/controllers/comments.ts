import { Response, Request, NextFunction} from "express";
import { User } from "../entity/UserEntity";
import { Comment } from "../entity/CommentEntity";
import { Place } from "../entity/PlaceEntity";
import { UserRepo } from "../repository/user-repository";
import { PlaceRepo } from "../repository/place-repository";

export class CommentController {

  userRepo: UserRepo;
  placeRepo: PlaceRepo;

  constructor(){
    this.userRepo = new UserRepo();
    this.placeRepo = new PlaceRepo();
  }

  //get 
  async addCommentToPlace(req: Request, res: Response, next: NextFunction) {
    
    const userid: number = req.user.id;
    const placeid: string = req.body.place_id;

    const localuser: User = await User.findOne( { where: { id: userid } } );
    const localplace: Place = await Place.findOne( { where: { place_id: placeid } } );
    const newComment: Comment = new Comment();

    newComment.description = req.body.description;
    newComment.user = localuser;
    newComment.place = localplace;

    const savedComment: Comment = await Comment.save(newComment);

    res.send("Comment Applied");
  }
}
