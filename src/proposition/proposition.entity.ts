import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne} from "typeorm";
import { ObjectType, Field,InputType } from '@nestjs/graphql';

import {Enchere} from "../enchere/enchere.entity";
import {Transporteur} from "../transporteur/transporteur.entity";
import {Vehicule} from "../vehicule/vehicule.entity";

@Entity()
@ObjectType()
@InputType("PropositionInput")
export class Proposition extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field()
    id: number;                 

    @Column({type: "double", nullable:true   })
    @Field()
    prixunitaire: number;           // ............................................................... 0.09 (ts3oud dl'frank L'kilou, arachide), 8 (Tmnia drahem Lqentar)...etc

    @Column({type: "text", nullable:true   })
    @Field()
    commentaire: string;            // ............................................................... 'Lkamiou darori 3ali, piste f jmi3', 'Bâche à prévoir et benne propre, transport de blé de qualité supérieure' ...etc etc

    @Column({type: "datetime", nullable:true  })
    @Field({nullable: true})
    date: Date;
    
    @Column({type: "varchar",  length: 50, nullable:true   })
    @Field()
    statut: string;             // ............................................................... Rédigé, publié, attribué, abandonné...etc

    @ManyToOne(type => Enchere, enchere => enchere.propositions)
    enchere: Enchere;

    @ManyToOne(type => Transporteur, transporteur => transporteur.propositions)
    transporteur: Transporteur;

}