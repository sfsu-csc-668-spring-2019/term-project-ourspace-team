import { Response, Request, NextFunction} from "express";
import { User } from "../entity/UserEntity";
import { Comment } from "../entity/CommentEntity";
import { Place } from "../entity/PlaceEntity";
import { UserRepo } from "../repository/user-repository";

export class CommentController {

    userRepo: UserRepo;

    constructor(){
        this.userRepo = new UserRepo();
    }

    //get 
    async addCommentToPlace(req: Request, res: Response, next: NextFunction) {
        
        const userid: number = req.user.id;
        const placeid: string = req.body.place_id
        const localuser: User = await User.findOne({where: {id: userid} });
        const newComment: Comment = new Comment();
        newComment.description = "This place is dumb lelelelel";
        newComment.user = localuser;



        res.send("Comment Applied");
    }

}
