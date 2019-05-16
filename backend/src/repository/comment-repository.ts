import { Comment } from "../entity/CommentEntity";
import { json } from "body-parser";
 
export class CommentRepo {
  saveMap(comment: Comment){
    return Comment.save(comment)
  }
}