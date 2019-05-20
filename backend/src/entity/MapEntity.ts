import {PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, PrimaryColumn} from "typeorm";
import {Entity, Column, BaseEntity} from "typeorm";
import {User} from "./UserEntity";
import {Place} from "./PlaceEntity";

export enum MapType{
  NORMAL = "normal",
  HOT = "hot",
  TRENDING = "trending",
}

@Entity("map")
export class Map extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: MapType,
    default: MapType.NORMAL
  })
  type: MapType

  //Many maps to one user
  @ManyToOne(type => User, user => user.maps)
  user: User;

  //Many maps have many places (Map is owner of relationship)
  @ManyToMany(type => Place, place => place.maps)
  @JoinTable()
  places: Place[];

}
