import {PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Entity} from "typeorm";
import {Column} from "typeorm";
import {BaseEntity} from "typeorm";
import {Map} from "./MapEntity";

@Entity("user")
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @Column()
    email: string;

    //One user to many maps
    @OneToMany(type => Map, map => map.user)
    maps: Map[];
    

}
