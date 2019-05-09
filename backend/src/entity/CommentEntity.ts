import {PrimaryGeneratedColumn} from "typeorm";
import {Entity, Column, BaseEntity} from "typeorm";

@Entity("comment")
export class Comment extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    //foreign key one to one
    // @Column()
    // userid: number;

}
