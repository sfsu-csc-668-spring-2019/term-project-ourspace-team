import {PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable} from "typeorm";
import {Entity, Column, BaseEntity} from "typeorm";
import {Map} from "./MapEntity";
import {Comment} from "./CommentEntity";

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

  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[];

  @ManyToMany(type => User, user => user.follow)
  @JoinTable()
  follow: User[];
  
}
