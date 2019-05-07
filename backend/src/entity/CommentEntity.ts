import {PrimaryGeneratedColumn} from "typeorm";
import {Entity} from "typeorm";
import {Column} from "typeorm";
import {BaseEntity} from "typeorm";

@Entity("comment")
export class comment extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    //foreign key one to one
    // @Column()
    // userid: number;

}
