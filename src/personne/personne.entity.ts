import {Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, JoinColumn, BaseEntity, OneToMany} from "typeorm";
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

import {Chauffeur} from "../chauffeur/chauffeur.entity"
import {Gestionaire} from "../gestionaire/gestionaire.entity"

@Entity()
@ObjectType()
@InputType("PersonneInput")
export class Personne extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column({type: "varchar",  length: 100  })
    @Field()
   	nom: string;

    @Column({type: "varchar",  length: 100  })
    @Field()
    prenom: string;

    @Column({type: "varchar",  length: 20, nullable: true  })
    @Field()
   	cin: string;          

    @Column({ type:"date", nullable: true } )
    @Field()
    dob: Date;     
    
    @Column({type: "varchar",  length: 20, nullable: true  })
    @Field()
   	permis: string;   

       
    @OneToMany(type => Chauffeur, chauffeur => chauffeur.personne)
    @Field(type => [Chauffeur])
    chauffeurs: [Chauffeur]

    @OneToMany(type => Gestionaire, gestionaire => gestionaire.personne)
    @Field(type => [Gestionaire])
    gestionaires: [Gestionaire]
}