import { Response, Request, NextFunction} from "express";

import { User } from "../entity/UserEntity";
import { Place } from "../entity/PlaceEntity";
import { Comment } from "../entity/CommentEntity";
import { Map } from "../entity/MapEntity";


export class HomepageController {

    //get "/""
    async indexpage(req: Request, res: Response, next: NextFunction) {
        //Console logs for User authetication confirmations
        // console.log(req.user);
        // if (req.isAuthenticated() ==  false){
        //     //
        // } else {
        //     console.log(req.user.id);
        // }
        //console.log(req.user.id);
        console.log(req.isAuthenticated());
        res.send("Index Page Hit");
    }

    async createTablesWithDummyData(req: Request, res: Response, next: NextFunction){
        //Create basic entities
        const dummyUser: User = new User();
        dummyUser.name = "John";
        dummyUser.username = "IamJohn"
        dummyUser.password = "NonHashedPassword"
        dummyUser.email = "IamJohn@gmail.com"
        await User.save(dummyUser);

        const dummyMap: Map = new Map();
        await Map.save(dummyMap);

        const dummyPlace: Place = new Place();
        dummyPlace.place_id
        await Place.save(dummyPlace);

        const dummyComment: Comment = new Comment();
        dummyComment.description = "This is a comment contents example.";
        await Comment.save(dummyComment);

        //Connect Relations with created saved entities
        dummyUser.maps = [dummyMap];
        dummyUser.comments = [dummyComment];
        await User.save(dummyUser);

        dummyMap.places = [dummyPlace];
        await Map.save(dummyMap);

        dummyPlace.comments = [dummyComment];
        await Place.save(dummyPlace);


        //Remove Entities after created



        res.send("Created tables with data");
    }

    //example get request using is authenticated
    async exampleget(req: Request, res: Response, next: NextFunction) {
        //test route to console.log if user is authenticated
        //console.log("Auth has allowed this");
        res.send("example get");
    }
}
