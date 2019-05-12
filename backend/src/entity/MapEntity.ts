import {PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import {Entity, Column, BaseEntity} from "typeorm";
import {User} from "./UserEntity";
import {Place} from "./PlaceEntity";

@Entity("map")
export class Map extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    //Many maps to one user
    @ManyToOne(type => User, user => user.maps)
    user: User;

    //Many maps have many places (Map is owner of relationship)
    @ManyToMany(type => Place, place => place.maps)
    @JoinTable()
    places: Place[]
}
