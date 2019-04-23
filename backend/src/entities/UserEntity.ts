import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

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

    static findByName(username: string, password: string){
        return this.createQueryBuilder("user")
            .where("user.username = :username", {username})
            .andWhere("user.password = :password", {password})
            .getMany();
    }

    static registerNewUser(username: string, password:string){
        return "hello"
    }

}
