import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';


@Entity()
@ObjectType()
export class Producteur extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;
  
    @Column({ length: 100 })
    @Field({nullable: true})
    prenom?: string;
  
    @Column({ length: 500 })
    @Field({nullable: true})
    address1?: string;

}
