import {PrimaryGeneratedColumn} from "typeorm";
import {Entity} from "typeorm";
import {Column} from "typeorm";
import {BaseEntity} from "typeorm";

@Entity("place")
export class Place extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    googleid: string;

    //foriegn key for userid
    // @Column()
    // favorites: ;

    //foriegn key
    // @Column()
    // comments: ;
}
