import {PrimaryGeneratedColumn, ManyToMany} from "typeorm";
import {Entity} from "typeorm";
import {Column} from "typeorm";
import {BaseEntity} from "typeorm";
import {Map} from "./MapEntity"

@Entity("place")
export class Place extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    //Many places for Many Maps
    @ManyToMany(type => Map, map => map.places)
    maps: Map[];

}
