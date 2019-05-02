import {PrimaryGeneratedColumn} from "typeorm";
import {Entity} from "typeorm";
import {Column} from "typeorm";
import {BaseEntity} from "typeorm";

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

    // other userids
    // @Column()
    // followers: Int16Array;

    // other userids
    // @Column()
    // following: Int16Array;

}
