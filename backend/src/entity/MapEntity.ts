import {PrimaryGeneratedColumn} from "typeorm";
import {Entity} from "typeorm";
import {Column} from "typeorm";
import {BaseEntity} from "typeorm";

@Entity("map")
export class Map extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    //foreign key
    @Column()
    userid: number;

    //foreign key
    @Column()
    placeids: ;
}
