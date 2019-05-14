import { Response, Request, NextFunction} from "express";
import { Map } from "../entity/MapEntity";
import { Place } from "../entity/PlaceEntity";
import { User } from "../entity/UserEntity";

import { MapRepo } from "../repository/map-repository";
import { UserRepo } from "../repository/user-repository";
import { PlaceRepo } from "../repository/place-repository";

import * as bcrypt from 'bcryptjs';
import "reflect-metadata";
import { hash } from "bcrypt-nodejs";
import { userInfo } from "os";

export class MapController {

    async removePlace(req: Request, res: Response, next: NextFunction){
        res.send("Work in Progress");
    }

    async getPlacesFromMap(req: Request, res: Response, next: NextFunction){
        res.send("Work in Progress");
    }

    async exampleUser(req: Request, res: Response, next: NextFunction){
        res.send("user example route working");
        const newUser: User = new User();
        // const hashPassword = await bcrypt.hash("test", 10);

        // newUser.name = "jarek";
        // newUser.username = "jarek";
        // newUser.email = "jarek@stuff.com";
        // newUser.password = hashPassword;

        res.send("");

    }

    async exampleMap(req: Request, res: Response, next: NextFunction){
        const mapRepo: MapRepo = new MapRepo();
        const userRepo: UserRepo = new UserRepo();
        const newUser2: User = new User();
        const hashPassword = await bcrypt.hash("test", 10);

        newUser2.name = "jarek3";
        newUser2.username = "jarek3";
        newUser2.email = "jarek3@stuff.com";
        newUser2.password = hashPassword;
        const userEx = await userRepo.saveUser(newUser2);

        const newMap: Map = new Map();
        newMap.user = newUser2;
        const mapEx = await mapRepo.saveMap(newMap);

        console.log(userEx);
        console.log(mapEx);

        const newMap2: Map = new Map();
        newMap2.user = userEx;
        const mapAfter = await mapRepo.saveMap(newMap2);
        res.send("Info in console");
        

    }

    //add new place to map
    async addPlace(req: Request, res: Response, next: NextFunction){
        //get map

        //add place if doesnt exist in db
        const newMap: Map = new Map();
        const newPlace: Place = new Place();
        const mapRepo: MapRepo = new MapRepo();
        const placeRepo: PlaceRepo = new PlaceRepo();

        //Place Dummy 1
        newPlace.place_id = "ChIJgeLABbB9j4AR00VqlJ98eqU";
        newPlace.name = "San Francisco State University";
        newPlace.address = "1600 Holloway Ave, San Francisco, CA 94132, USA";
        newPlace.latitude = 37.72189700000001;
        newPlace.longitude = -122.47820939999997;
        newPlace.phone = "+1 415-338-1111";
        newPlace.photos = ["https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA439-jAeXUUTsppIX8jow_3tL1ZwCnwaH3zGqW8GrPZ19tb3-sSROWI1VtcKdGDwehlQH-QuA7nGSLIEyADrdIk2baOSlxKVBQ-sJWRf0NvGPipb5GOox4APkXK-rflbsEhAuZHlBtpzNnCHpL0S-oFYEGhSj0SvkBVrGfAmc-BowkQsSKdgYhg&3u3096&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=4597","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAn0cPHucTlrDRxAtg_q0vsB758rAvh_AcnM8R-I4yMdamep4rAJ5ix9-7c-Lfhc1BTG45r-kPfv_j_VFZYIRFGhNj6Y0whmXGK2EaLAEXjqK_ScIAA-BYp17Zg6Is1l6zEhDbNUt0SFQmM--wPLSnSJOtGhRWtsAgll8DmTE4eYzL-aSJ-n50UQ&3u4008&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=19815","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAbKnPjchttG-Z-vYiTDDdB-2sSEsBMDb3ZFzkLkj5E-JbG-5FjW-husgBzoaYHLz_oNOkRUYhNwjLeuyL_eWPNiI4CiiBLh5GOh3s1n4dGrwRM5FepBX0nIzga-wKiuCeEhA3JLgU1UD2bYt_2pQ2RbgtGhRfAq6bzNhnEseB3HrU71Y_T33tcQ&3u1920&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=113472","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAARTh30Af1iPdlz-23sCREsaYnI2m8EXeaz4SaTU1fL7DvrDFR8GCBa0LekcKSAVzTFwKJzfiTMmuNzDnfowPxN_f4HKgmJslJMBSTtPaNgEaasYojeaTasbkF57ioMFd4EhCLQLGn8O3RsuveJJItuF_yGhTjpGWNMtXgpHsj7FqwHAWFiDJ3hw&3u4032&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=96475","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAXiSuaFMqpmSzexBzHBSUPbO6XxBOZ_ixddtdYrLhaCC9sCNWbHMjbs0Gzn-OayrdnM5gzC1kyQv6ouLXDkCtMvP9l0qwUInN88hJh5qkw55WMJQ35efuWs2ESSPS2iihEhA1_C9dX9aVoSY_VvLkmiCkGhSKLbZdKlt2hHxRnGksyw6QJze0ew&3u3264&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=74033","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAYJuy_myDrpsTLGQf1SYzcZfbIwfGJOwoDh6q-9PlO7bXTlLdjCwqsPqqTCrDVbY2JED-eHQq1m0vUlmL77i8q6rUSMXAoWldTTFA4uZIUq5q3pkUhh6SdK5dwZu8DbyLEhBNxJdv9CF-iO-A4H4E0mCPGhTPg8ZX9oqjwpHsz9BmvbRYPjS9nw&3u5312&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=110852","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAABTkjoesVzlscCKWLcv9JokpNNg7H5wrk93uT6pf-0LF5kFZDe0ThfXGn-Ltisrc9GI0CQtWezIl4z3nN-H7E2AAoRXr_OnwZ-rPGwLbQIJjmcjuK3aXPcEJ_myXH6bEQEhDKCsam2VplKWsufuw7_DBtGhRvGpuUBRhO7reFbyErId3jQoq8CA&3u3006&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=14571","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAbbZkPEwr4HUzUAp4qM16o3YoSv9Soy9pnzZZJdSb1HqNAp8xBxFrrPgBRDgXT2IjuOFp0yT0CiAd0NFUL9h2d_Pl8vacDGU2TnH5hwit-SCwPoHnQk5h1HKa2DoaoYyhEhCnTR0kGf-rqPIrCy4NtC6PGhQqvE-tSMykb6MXss63HXMvTYwxJQ&3u4032&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=21132","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA1fSoSpYL8QGO7JlRHlMMTe2CR-31OXno4tYb52VOrt_E_4NV_NMGboCaF9ulwLZKQIHLG3VacfCZ-OeYiKbIiekFCk1y2bQVbS8un7g4a7abinPUoXiVpKYkM-ogjhcJEhBmoUufcXuXV2xw3zqIhyyMGhScQoGktjAwZVf6MH6p0wAjaEfX7w&3u4032&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=121760","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAEuJc1l-U1fgdew8o5ajqvLGzxy3_YUxuRYutbZb7_gfRRZCp_v6WYFa_HR2evZCAFJDEENQlyjdE3dFuNhn5JCjiA64MBt_WOpOTIt7yf8mbA10uyWUcEuSUT_TrVHf5EhDfqG62Mk6nkSW-PySGcv9UGhSeU-7oMhn6WpzkU0xsJkwyXIy7Ng&3u3264&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=44830"];
        newPlace.icon = "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA439-jAeXUUTsppIX8jow_3tL1ZwCnwaH3zGqW8GrPZ19tb3-sSROWI1VtcKdGDwehlQH-QuA7nGSLIEyADrdIk2baOSlxKVBQ-sJWRf0NvGPipb5GOox4APkXK-rflbsEhAuZHlBtpzNnCHpL0S-oFYEGhSj0SvkBVrGfAmc-BowkQsSKdgYhg&3u3096&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=4597";
        
        //Place Dummy 2
        const newPlace2: Place = new Place();
        newPlace2.place_id = "ChIJgeLABbB9j4AR00VqlJ98eqU";
        newPlace2.name = "San Francisco State University";
        newPlace2.address = "1600 Holloway Ave, San Francisco, CA 94132, USA";
        newPlace2.latitude = 37.72189700000001;
        newPlace2.longitude = -122.47820939999997;
        newPlace2.phone = "+1 415-338-1111";
        newPlace2.photos = ["https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA439-jAeXUUTsppIX8jow_3tL1ZwCnwaH3zGqW8GrPZ19tb3-sSROWI1VtcKdGDwehlQH-QuA7nGSLIEyADrdIk2baOSlxKVBQ-sJWRf0NvGPipb5GOox4APkXK-rflbsEhAuZHlBtpzNnCHpL0S-oFYEGhSj0SvkBVrGfAmc-BowkQsSKdgYhg&3u3096&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=4597","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAn0cPHucTlrDRxAtg_q0vsB758rAvh_AcnM8R-I4yMdamep4rAJ5ix9-7c-Lfhc1BTG45r-kPfv_j_VFZYIRFGhNj6Y0whmXGK2EaLAEXjqK_ScIAA-BYp17Zg6Is1l6zEhDbNUt0SFQmM--wPLSnSJOtGhRWtsAgll8DmTE4eYzL-aSJ-n50UQ&3u4008&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=19815","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAbKnPjchttG-Z-vYiTDDdB-2sSEsBMDb3ZFzkLkj5E-JbG-5FjW-husgBzoaYHLz_oNOkRUYhNwjLeuyL_eWPNiI4CiiBLh5GOh3s1n4dGrwRM5FepBX0nIzga-wKiuCeEhA3JLgU1UD2bYt_2pQ2RbgtGhRfAq6bzNhnEseB3HrU71Y_T33tcQ&3u1920&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=113472","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAARTh30Af1iPdlz-23sCREsaYnI2m8EXeaz4SaTU1fL7DvrDFR8GCBa0LekcKSAVzTFwKJzfiTMmuNzDnfowPxN_f4HKgmJslJMBSTtPaNgEaasYojeaTasbkF57ioMFd4EhCLQLGn8O3RsuveJJItuF_yGhTjpGWNMtXgpHsj7FqwHAWFiDJ3hw&3u4032&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=96475","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAXiSuaFMqpmSzexBzHBSUPbO6XxBOZ_ixddtdYrLhaCC9sCNWbHMjbs0Gzn-OayrdnM5gzC1kyQv6ouLXDkCtMvP9l0qwUInN88hJh5qkw55WMJQ35efuWs2ESSPS2iihEhA1_C9dX9aVoSY_VvLkmiCkGhSKLbZdKlt2hHxRnGksyw6QJze0ew&3u3264&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=74033","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAYJuy_myDrpsTLGQf1SYzcZfbIwfGJOwoDh6q-9PlO7bXTlLdjCwqsPqqTCrDVbY2JED-eHQq1m0vUlmL77i8q6rUSMXAoWldTTFA4uZIUq5q3pkUhh6SdK5dwZu8DbyLEhBNxJdv9CF-iO-A4H4E0mCPGhTPg8ZX9oqjwpHsz9BmvbRYPjS9nw&3u5312&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=110852","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAABTkjoesVzlscCKWLcv9JokpNNg7H5wrk93uT6pf-0LF5kFZDe0ThfXGn-Ltisrc9GI0CQtWezIl4z3nN-H7E2AAoRXr_OnwZ-rPGwLbQIJjmcjuK3aXPcEJ_myXH6bEQEhDKCsam2VplKWsufuw7_DBtGhRvGpuUBRhO7reFbyErId3jQoq8CA&3u3006&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=14571","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAbbZkPEwr4HUzUAp4qM16o3YoSv9Soy9pnzZZJdSb1HqNAp8xBxFrrPgBRDgXT2IjuOFp0yT0CiAd0NFUL9h2d_Pl8vacDGU2TnH5hwit-SCwPoHnQk5h1HKa2DoaoYyhEhCnTR0kGf-rqPIrCy4NtC6PGhQqvE-tSMykb6MXss63HXMvTYwxJQ&3u4032&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=21132","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA1fSoSpYL8QGO7JlRHlMMTe2CR-31OXno4tYb52VOrt_E_4NV_NMGboCaF9ulwLZKQIHLG3VacfCZ-OeYiKbIiekFCk1y2bQVbS8un7g4a7abinPUoXiVpKYkM-ogjhcJEhBmoUufcXuXV2xw3zqIhyyMGhScQoGktjAwZVf6MH6p0wAjaEfX7w&3u4032&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=121760","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAEuJc1l-U1fgdew8o5ajqvLGzxy3_YUxuRYutbZb7_gfRRZCp_v6WYFa_HR2evZCAFJDEENQlyjdE3dFuNhn5JCjiA64MBt_WOpOTIt7yf8mbA10uyWUcEuSUT_TrVHf5EhDfqG62Mk6nkSW-PySGcv9UGhSeU-7oMhn6WpzkU0xsJkwyXIy7Ng&3u3264&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=44830"];
        newPlace2.icon = "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA439-jAeXUUTsppIX8jow_3tL1ZwCnwaH3zGqW8GrPZ19tb3-sSROWI1VtcKdGDwehlQH-QuA7nGSLIEyADrdIk2baOSlxKVBQ-sJWRf0NvGPipb5GOox4APkXK-rflbsEhAuZHlBtpzNnCHpL0S-oFYEGhSj0SvkBVrGfAmc-BowkQsSKdgYhg&3u3096&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=4597";
        
        //save place 1
        const savedPlace = await placeRepo.savePlace(newPlace);
        //save place to map as the array of single place obj 
        //NOTE: create empty array on initial creation

        if (newMap.places == null){
            console.log("Value is null"); //Empty array is null by default

        } else if (newMap.places.length == 0){
            console.log("length is 0");
        }

        newMap.places = [newPlace];
        //save place 2
        newMap.places = newMap.places.concat([newPlace2]);
        //save map with place
        const savedMap = await mapRepo.saveMap(newMap);

        //with returned data concat to existing array
        savedMap.places = savedMap.places.concat([newPlace2]);

        //save updates user if existing in db already with new values
        ////const savedMapAgain = await mapRepo.saveMap(savedMap);

        ////console.log(savedMapAgain);
        res.send("Add Place Route");
    }

    //add map to auth user
    async newMapForAuthUser(req: Request, res: Response, next: NextFunction){
        //console.log(req.user);

        const localuser: User = req.user;
        
        const newMap: Map = new Map();
        const mapRepo: MapRepo = new MapRepo();
        const userRepo: UserRepo = new UserRepo();

        const map = await mapRepo.saveMap(newMap);

        if (localuser.maps == null){
            localuser.maps = [newMap];
        } else {
            localuser.maps.concat([newMap]);
        }

        const value = await userRepo.saveUser(localuser);

        console.log("The new User values: " + value);
        res.send("New Map for Auth User");


    }

    //add place to auth user map x
    async newPlaceForMap(req: Request, res: Response, next: NextFunction){
        
        const newPlace: Place = new Place();
        //const reqPlace: Place = new Place();
        const mapRepo: MapRepo = new MapRepo();
        const placeRepo: PlaceRepo = new PlaceRepo();
        // const id = 1;
        const id = req.body.mapId;
        

        const tempMap: Map = await mapRepo.findMap(id);
        //const tempPlace: Place = await placeRepo.findOneOrAddPlace();
        newPlace.place_id = "ChIJgeLABbB9j4AR00VqlJ98eqU";
        newPlace.name = "San Francisco State University";
        newPlace.address = "1600 Holloway Ave, San Francisco, CA 94132, USA";
        newPlace.latitude = 37.72189700000001;
        newPlace.longitude = -122.47820939999997;
        newPlace.phone = "+1 415-338-1111";
        newPlace.photos = ["https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA439-jAeXUUTsppIX8jow_3tL1ZwCnwaH3zGqW8GrPZ19tb3-sSROWI1VtcKdGDwehlQH-QuA7nGSLIEyADrdIk2baOSlxKVBQ-sJWRf0NvGPipb5GOox4APkXK-rflbsEhAuZHlBtpzNnCHpL0S-oFYEGhSj0SvkBVrGfAmc-BowkQsSKdgYhg&3u3096&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=4597","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAn0cPHucTlrDRxAtg_q0vsB758rAvh_AcnM8R-I4yMdamep4rAJ5ix9-7c-Lfhc1BTG45r-kPfv_j_VFZYIRFGhNj6Y0whmXGK2EaLAEXjqK_ScIAA-BYp17Zg6Is1l6zEhDbNUt0SFQmM--wPLSnSJOtGhRWtsAgll8DmTE4eYzL-aSJ-n50UQ&3u4008&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=19815","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAbKnPjchttG-Z-vYiTDDdB-2sSEsBMDb3ZFzkLkj5E-JbG-5FjW-husgBzoaYHLz_oNOkRUYhNwjLeuyL_eWPNiI4CiiBLh5GOh3s1n4dGrwRM5FepBX0nIzga-wKiuCeEhA3JLgU1UD2bYt_2pQ2RbgtGhRfAq6bzNhnEseB3HrU71Y_T33tcQ&3u1920&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=113472","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAARTh30Af1iPdlz-23sCREsaYnI2m8EXeaz4SaTU1fL7DvrDFR8GCBa0LekcKSAVzTFwKJzfiTMmuNzDnfowPxN_f4HKgmJslJMBSTtPaNgEaasYojeaTasbkF57ioMFd4EhCLQLGn8O3RsuveJJItuF_yGhTjpGWNMtXgpHsj7FqwHAWFiDJ3hw&3u4032&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=96475","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAXiSuaFMqpmSzexBzHBSUPbO6XxBOZ_ixddtdYrLhaCC9sCNWbHMjbs0Gzn-OayrdnM5gzC1kyQv6ouLXDkCtMvP9l0qwUInN88hJh5qkw55WMJQ35efuWs2ESSPS2iihEhA1_C9dX9aVoSY_VvLkmiCkGhSKLbZdKlt2hHxRnGksyw6QJze0ew&3u3264&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=74033","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAYJuy_myDrpsTLGQf1SYzcZfbIwfGJOwoDh6q-9PlO7bXTlLdjCwqsPqqTCrDVbY2JED-eHQq1m0vUlmL77i8q6rUSMXAoWldTTFA4uZIUq5q3pkUhh6SdK5dwZu8DbyLEhBNxJdv9CF-iO-A4H4E0mCPGhTPg8ZX9oqjwpHsz9BmvbRYPjS9nw&3u5312&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=110852","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAABTkjoesVzlscCKWLcv9JokpNNg7H5wrk93uT6pf-0LF5kFZDe0ThfXGn-Ltisrc9GI0CQtWezIl4z3nN-H7E2AAoRXr_OnwZ-rPGwLbQIJjmcjuK3aXPcEJ_myXH6bEQEhDKCsam2VplKWsufuw7_DBtGhRvGpuUBRhO7reFbyErId3jQoq8CA&3u3006&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=14571","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAbbZkPEwr4HUzUAp4qM16o3YoSv9Soy9pnzZZJdSb1HqNAp8xBxFrrPgBRDgXT2IjuOFp0yT0CiAd0NFUL9h2d_Pl8vacDGU2TnH5hwit-SCwPoHnQk5h1HKa2DoaoYyhEhCnTR0kGf-rqPIrCy4NtC6PGhQqvE-tSMykb6MXss63HXMvTYwxJQ&3u4032&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=21132","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA1fSoSpYL8QGO7JlRHlMMTe2CR-31OXno4tYb52VOrt_E_4NV_NMGboCaF9ulwLZKQIHLG3VacfCZ-OeYiKbIiekFCk1y2bQVbS8un7g4a7abinPUoXiVpKYkM-ogjhcJEhBmoUufcXuXV2xw3zqIhyyMGhScQoGktjAwZVf6MH6p0wAjaEfX7w&3u4032&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=121760","https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAEuJc1l-U1fgdew8o5ajqvLGzxy3_YUxuRYutbZb7_gfRRZCp_v6WYFa_HR2evZCAFJDEENQlyjdE3dFuNhn5JCjiA64MBt_WOpOTIt7yf8mbA10uyWUcEuSUT_TrVHf5EhDfqG62Mk6nkSW-PySGcv9UGhSeU-7oMhn6WpzkU0xsJkwyXIy7Ng&3u3264&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=44830"];
        newPlace.icon = "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA439-jAeXUUTsppIX8jow_3tL1ZwCnwaH3zGqW8GrPZ19tb3-sSROWI1VtcKdGDwehlQH-QuA7nGSLIEyADrdIk2baOSlxKVBQ-sJWRf0NvGPipb5GOox4APkXK-rflbsEhAuZHlBtpzNnCHpL0S-oFYEGhSj0SvkBVrGfAmc-BowkQsSKdgYhg&3u3096&5m1&2e1&callback=none&key=AIzaSyBp1zbhrcngsbN8eIBJsrxBH2FGrsyHNjs&token=4597";

        // reqPlace.place_id = req.body.place_id;
        // reqPlace.name = req.body.name;
        // reqPlace.address = req.body.address;
        // reqPlace.latitude = req.body.lat;
        // reqPlace.longitude = req.body.lng;
        // reqPlace.phone = req.body.phone;
        // reqPlace.photos = req.body.photos;
        // reqPlace.icon = req.body.icon;
        const tempPlace: Place = await placeRepo.findOneOrAddPlace(newPlace);
        
        if (tempMap.places == null) {
            tempMap.places = [tempPlace];
        } else {
            tempMap.places.concat([tempPlace]);
        }

        await mapRepo.saveMap(tempMap);
        
        res.send("New Place for Map");
    }


    //remove place from auth user map x
    async removePlaceForMap(req: Request, res: Response, next: NextFunction){
        res.send("Under Construction");
    }
}
