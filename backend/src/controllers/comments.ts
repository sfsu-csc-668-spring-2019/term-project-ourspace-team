import { Response, Request, NextFunction } from "express";
import { User } from "../entity/UserEntity";
import { Comment } from "../entity/CommentEntity";
import { Place } from "../entity/PlaceEntity";

export class CommentController {

  //get comments from place
  async getComments(req: Request, res: Response, next: NextFunction) {
    const placeid: number = req.body.id;
    const place: Place = await Place.findOne( { where: { id: placeid }, relations: ["comments"] } );
    res.send(place.comments);
  }

  //post Comment onto place using authenticated user
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

  async removeComment(req: Request, res: Response, next: NextFunction){
    const commentId = req.body.id;
    const commentToRemove: Comment = await Comment.findOne( { where: { id: commentId } } );

    await Comment.remove(commentToRemove);
    res.send("Comment Deleted: ")
  }
  
}
