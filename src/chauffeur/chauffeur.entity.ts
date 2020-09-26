import {Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, JoinColumn, BaseEntity} from "typeorm";
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

import {Vehicule} from "../vehicule/vehicule.entity";
import {Transporteur} from "../transporteur/transporteur.entity";
import {Personne} from "../personne/personne.entity";


@Entity()
@ObjectType()
@InputType("ChauffeurInput")
export class Chauffeur extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column({type: "varchar",  length: 100  })
    @Field()
   	nom: string;

    @Column({type: "varchar",  length: 100  })
    @Field()
   	prenom: string;

    @Column()
    @Field()
    isactive: boolean;   

    @ManyToOne(type => Transporteur, transporteur => transporteur.chauffeurs)
    @Field(type => [Transporteur])
    transporteur: Transporteur;

    @ManyToOne(type => Vehicule, vehicule => vehicule.chauffeurs)
    @Field(type => [Vehicule])
    vehicules: Vehicule[];    

    @ManyToOne(type => Personne, personne => personne.chauffeurs)
    @Field(type => [Personne])
    personne: Personne;

}