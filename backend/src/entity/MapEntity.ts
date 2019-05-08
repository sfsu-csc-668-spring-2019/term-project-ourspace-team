import {PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Entity} from "typeorm";
import {Column} from "typeorm";
import {BaseEntity} from "typeorm";
import {User} from "./UserEntity";
import { userInfo } from "os";

@Entity("map")
export class Map extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    //Many maps to one user
    @ManyToOne(type => User, user => user.maps)
    user: User;
}
