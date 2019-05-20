import { Response, Request, NextFunction, response } from "express";
import { UserRepo } from "../repository/user-repository";
import * as bcrypt from 'bcryptjs';

export class LoginController {

  //Post /login
  async login(req: Request, res: Response, next: NextFunction) {
    let userRepo: UserRepo = new UserRepo();
    const username: string = req.body.username;
    const password: any = req.body.password;

    const user = await userRepo.findUserSigningIn(username);
    
    if (user.length != 0) {
      
      if (username === user[0].username) {
        const passwordsMatch = await bcrypt.compare(password, user[0].password);

        if (passwordsMatch === true) {
          // Valid Login
          req.login(user[0], (err) => {
            res.status(200).json({
              id: req.user.id,
              name: req.user.name,
              username: req.user.username,
              email: req.user.email,
            });
          });
        } else {
          // Passwords do not match, not a valid login
          res.status(203).json({ errorMessage: 'Invalid Password.' });
        }
      }
    } else {
      // User doesn't exist
      res.status(203).json({ errorMessage: 'Username not found.' });
    }
  }

  //logout authenticated user
  async logout(req: Request, res: Response, next: NextFunction) {
    req.logout();
    res.redirect("/");
  }

}
