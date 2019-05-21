import { Comment } from "../entity/CommentEntity";
 
export class CommentRepo {

  saveMap(comment: Comment){
    return Comment.save(comment)
  }
}