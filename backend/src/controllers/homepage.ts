import { Response, Request, NextFunction} from "express";

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

    //example get request using is authenticated
    async exampleget(req: Request, res: Response, next: NextFunction) {
        //test route to console.log if user is authenticated
        //console.log("Auth has allowed this");
        res.send("example get");
    }
}
