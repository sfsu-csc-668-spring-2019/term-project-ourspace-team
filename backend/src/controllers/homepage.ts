import { Response, Request, NextFunction} from "express";

import { User } from "../entity/UserEntity";
import { Place } from "../entity/PlaceEntity";
import { Comment } from "../entity/CommentEntity";
import { Map } from "../entity/MapEntity";
import { FollowLogic } from "../logic/followLogic";

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
    const followData: FollowLogic = new FollowLogic();
    const dummyUser: User = new User();
    dummyUser.name = "John";
    dummyUser.username = "IamJohn"
    dummyUser.password = "NonHashedPassword"
    dummyUser.email = "IamJohn@gmail.com"
    await User.save(dummyUser);

    const followUser: User = new User();
    followUser.name = "John";
    followUser.username = "IamJohn"
    followUser.password = "NonHashedPassword"
    followUser.email = "IamJohn@gmail.com"
    await User.save(dummyUser);

    const dummyMap: Map = new Map();
    await Map.save(dummyMap);

    const dummyPlace: Place = new Place();
    dummyPlace.place_id = "ChIJgeLABbB9j4AR00VqlJ98eqU";
    dummyPlace.name = "San Francisco State University";
    dummyPlace.address = "1600 Holloway Ave, San Francisco, CA 94132, USA";
    dummyPlace.latitude = 37.72189700000001;
    dummyPlace.longitude = -122.47820939999997;
    dummyPlace.phone = "+1 415-338-1111";
    dummyPlace.photos = [
      "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA439-jAeXUUTsppIX8jow_3tL1ZwCnwaH3zGqW8GrPZ19tb3-sSROWI1VtcKdGDwehlQH-QuA7nGSLIEyADrdIk2baOSlxKVBQ-sJWRf0NvGPipb5GOox4APkXK-rflbsEhAuZHlBtpzNnCHpL0S-oFYEGhSj0SvkBVrGfAmc-BowkQsSKdgYhg&3u3096&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=4597", 
      "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAn0cPHucTlrDRxAtg_q0vsB758rAvh_AcnM8R-I4yMdamep4rAJ5ix9-7c-Lfhc1BTG45r-kPfv_j_VFZYIRFGhNj6Y0whmXGK2EaLAEXjqK_ScIAA-BYp17Zg6Is1l6zEhDbNUt0SFQmM--wPLSnSJOtGhRWtsAgll8DmTE4eYzL-aSJ-n50UQ&3u4008&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=19815",
      "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAbKnPjchttG-Z-vYiTDDdB-2sSEsBMDb3ZFzkLkj5E-JbG-5FjW-husgBzoaYHLz_oNOkRUYhNwjLeuyL_eWPNiI4CiiBLh5GOh3s1n4dGrwRM5FepBX0nIzga-wKiuCeEhA3JLgU1UD2bYt_2pQ2RbgtGhRfAq6bzNhnEseB3HrU71Y_T33tcQ&3u1920&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=113472",
      "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAARTh30Af1iPdlz-23sCREsaYnI2m8EXeaz4SaTU1fL7DvrDFR8GCBa0LekcKSAVzTFwKJzfiTMmuNzDnfowPxN_f4HKgmJslJMBSTtPaNgEaasYojeaTasbkF57ioMFd4EhCLQLGn8O3RsuveJJItuF_yGhTjpGWNMtXgpHsj7FqwHAWFiDJ3hw&3u4032&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=96475",
      "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAXiSuaFMqpmSzexBzHBSUPbO6XxBOZ_ixddtdYrLhaCC9sCNWbHMjbs0Gzn-OayrdnM5gzC1kyQv6ouLXDkCtMvP9l0qwUInN88hJh5qkw55WMJQ35efuWs2ESSPS2iihEhA1_C9dX9aVoSY_VvLkmiCkGhSKLbZdKlt2hHxRnGksyw6QJze0ew&3u3264&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=74033",
      "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAYJuy_myDrpsTLGQf1SYzcZfbIwfGJOwoDh6q-9PlO7bXTlLdjCwqsPqqTCrDVbY2JED-eHQq1m0vUlmL77i8q6rUSMXAoWldTTFA4uZIUq5q3pkUhh6SdK5dwZu8DbyLEhBNxJdv9CF-iO-A4H4E0mCPGhTPg8ZX9oqjwpHsz9BmvbRYPjS9nw&3u5312&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=110852",
      "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAABTkjoesVzlscCKWLcv9JokpNNg7H5wrk93uT6pf-0LF5kFZDe0ThfXGn-Ltisrc9GI0CQtWezIl4z3nN-H7E2AAoRXr_OnwZ-rPGwLbQIJjmcjuK3aXPcEJ_myXH6bEQEhDKCsam2VplKWsufuw7_DBtGhRvGpuUBRhO7reFbyErId3jQoq8CA&3u3006&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=14571",
      "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAbbZkPEwr4HUzUAp4qM16o3YoSv9Soy9pnzZZJdSb1HqNAp8xBxFrrPgBRDgXT2IjuOFp0yT0CiAd0NFUL9h2d_Pl8vacDGU2TnH5hwit-SCwPoHnQk5h1HKa2DoaoYyhEhCnTR0kGf-rqPIrCy4NtC6PGhQqvE-tSMykb6MXss63HXMvTYwxJQ&3u4032&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=21132",
      "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA1fSoSpYL8QGO7JlRHlMMTe2CR-31OXno4tYb52VOrt_E_4NV_NMGboCaF9ulwLZKQIHLG3VacfCZ-OeYiKbIiekFCk1y2bQVbS8un7g4a7abinPUoXiVpKYkM-ogjhcJEhBmoUufcXuXV2xw3zqIhyyMGhScQoGktjAwZVf6MH6p0wAjaEfX7w&3u4032&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=121760",
      "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAEuJc1l-U1fgdew8o5ajqvLGzxy3_YUxuRYutbZb7_gfRRZCp_v6WYFa_HR2evZCAFJDEENQlyjdE3dFuNhn5JCjiA64MBt_WOpOTIt7yf8mbA10uyWUcEuSUT_TrVHf5EhDfqG62Mk6nkSW-PySGcv9UGhSeU-7oMhn6WpzkU0xsJkwyXIy7Ng&3u3264&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=44830"
    ];
    dummyPlace.icon = "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA439-jAeXUUTsppIX8jow_3tL1ZwCnwaH3zGqW8GrPZ19tb3-sSROWI1VtcKdGDwehlQH-QuA7nGSLIEyADrdIk2baOSlxKVBQ-sJWRf0NvGPipb5GOox4APkXK-rflbsEhAuZHlBtpzNnCHpL0S-oFYEGhSj0SvkBVrGfAmc-BowkQsSKdgYhg&3u3096&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=4597"

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

    const createFollow = await followData.setFollow(dummyUser, followUser);
    await User.save(createFollow);

    //Remove Entities after created
    // await Comment.remove(dummyComment);
    // await Place.remove(dummyPlace);
    // await Map.remove(dummyMap);
    // await User.remove(dummyUser);
    // await User.remove(followUser);
    

    res.send("Created tables with data");
  }

  //example get request using is authenticated
  async exampleget(req: Request, res: Response, next: NextFunction) {
  //test route to console.log if user is authenticated
  //console.log("Auth has allowed this");
  res.send("example get");
  }
}
