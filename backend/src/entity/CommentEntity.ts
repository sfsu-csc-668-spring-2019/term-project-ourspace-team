import {PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Entity, Column, BaseEntity} from "typeorm";

@Entity("comment")
export class Comment extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    //Many Comments to One Place
    // @ManyToOne()
    // ;

    //Many comments have one User
    // @ManyToMany()
    // 
}
