import {PrimaryGeneratedColumn, ManyToMany, OneToMany} from "typeorm";
import {Entity, Column, BaseEntity} from "typeorm";
import {Map} from "./MapEntity"


@Entity("place")
export class Place extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    place_id: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column("simple-array")
    photos: string[];

    @Column()
    icon: string;


    @Column("decimal", { precision: 12, scale: 10 })
    latitude: number;

    @Column("decimal", { precision: 13, scale: 10 })
    longitude: number;

    //Many places for Many Maps
    @ManyToMany(type => Map, map => map.places)
    maps: Map[];

    //One Place has many comments
    // @OneToMany()
    // comments: Comment[];

}
