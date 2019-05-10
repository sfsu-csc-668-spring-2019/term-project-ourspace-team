import {PrimaryGeneratedColumn, ManyToMany, OneToMany} from "typeorm";
import {Entity, Column, BaseEntity} from "typeorm";
import {Map} from "./MapEntity"


@Entity("place")
export class Place extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    placeid: string;

    //Many places for Many Maps
    @ManyToMany(type => Map, map => map.places)
    maps: Map[];

    //One Place has many comments
    // @OneToMany()
    // comments: Comment[];

}
