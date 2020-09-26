import {Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, JoinColumn, BaseEntity, OneToMany} from "typeorm";
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

import { Personne } from "src/personne/personne.entity";
import { Transporteur } from "src/transporteur/transporteur.entity";

@Entity()
@ObjectType()
@InputType("GestionaireInput")
export class Gestionaire extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @ManyToOne(type => Transporteur, transporteur => transporteur.gestionaires)
    @Field(type => [Transporteur])
    transporteur: Transporteur;

    @ManyToOne(type => Personne, personne => personne.gestionaires)
    @Field(type => Personne)
    personne: Personne


}