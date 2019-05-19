import { PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, PrimaryColumn } from "typeorm";
import { Entity, Column, BaseEntity } from "typeorm";

@Entity("map_place")
export class MapPlace extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mapId: number;

  @Column()
  userId: number;

  @Column() 
  placeId: number;
}
