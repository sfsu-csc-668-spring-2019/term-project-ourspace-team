import {PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Entity, Column, BaseEntity} from "typeorm";
import { User } from "./UserEntity";
import { Place } from "./PlaceEntity";

@Entity("comment")
export class Comment extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  //Many Comments to One Place
  @ManyToOne(type => Place, place => place.comments)
  place: Place;

  //Many comments have one User
  @ManyToOne(type => User, user => user.comments)
  user: User;
}
