import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { threadId } from "worker_threads";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    static findByName(firstname: string, lastname: string){
        return this.createQueryBuilder("user")
            .where("user.firstname = :firstname", {firstname})
            .andWhere("user.lastname = :lastname", {lastname})
            .getMany();
    }


}
