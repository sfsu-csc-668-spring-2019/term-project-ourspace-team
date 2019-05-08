import {PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import {Entity} from "typeorm";
import {Column} from "typeorm";
import {BaseEntity} from "typeorm";
import {User} from "./UserEntity";
import {Place} from "./PlaceEntity";
import { userInfo } from "os";

@Entity("map")
export class Map extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    //Many maps to one user
    @ManyToOne(type => User, user => user.maps)
    user: User;

    //Many maps have many places
    @ManyToMany(type => Place, place => place.maps)
    @JoinTable()
    places: Place[]
}
