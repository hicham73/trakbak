import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';


@Entity()
@ObjectType()
export class Expediteur extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column({ length: 100, nullable: true })
  @Field(type => String)
  prenom: string;

  @Column({length: 100, nullable: true})
  @Field(type => String)
  nom: string;

  @Column({type: 'int', nullable: true})
  @Field(type => Int)
  typecommerce?: number;

  @Column({type: 'int', nullable: true})
  @Field(type => Int)
  nbrdepots?: Number;

  @Column({type: 'timestamp', nullable: true})
  @Field({ nullable: true })
  milage: Date

  @Column({type: 'timestamp', nullable: true})
  @Field({ nullable: true })
  createdon: Date

  @Column({type: 'timestamp', nullable: true})
  @Field({ nullable: true })
  modifiedon: Date

  

}