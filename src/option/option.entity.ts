import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable, JoinColumn, BaseEntity} from "typeorm";
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

@Entity()
@ObjectType()
@InputType("OptionInput")
export class Option extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column({type: "int"})
    @Field(type => Int)
   	groupid: number;

    @Column({type: "varchar",  length: 50  })
    @Field({nullable: true})
    groupname: string;
   
    @Column({type: "int"})
    @Field(type => Int)
   	value: number;

    @Column({type: "varchar",  length: 100  })
    @Field({nullable: true})
    name: string;
   
}

