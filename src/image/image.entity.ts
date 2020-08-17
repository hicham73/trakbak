import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable, JoinColumn, BaseEntity} from "typeorm";
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

import {Vehicule} from "../vehicule/vehicule.entity";

@Entity()
@ObjectType()
@InputType("ImageInput")
export class Image extends BaseEntity {

    

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column({type: "varchar",  length: 50000  })
    @Field({nullable: true})
   	data: string;

    @ManyToOne(type => Vehicule, vehicule => vehicule.images)
    @Field(type => Vehicule, {nullable: true} )
    vehicule?: Vehicule;

}

