import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany} from "typeorm";
import { ObjectType, Field,InputType } from '@nestjs/graphql';

import {Expediteur} from "../expediteur/expediteur.entity";
import {Proposition} from "../proposition/proposition.entity";

@Entity()
@ObjectType()
@InputType("EnchereInput")
export class Enchere extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field()
    id: number;                 

    @Column({type: "varchar",  length: 255, nullable:true   })
    @Field()
    villedepart: string;      

    @Column({type: "varchar",  length: 255, nullable:true   })
    @Field()
    villearrivee: string;      
 
    @Column({type: "varchar",  length: 500, nullable:true   })
    @Field()
    marchandise: string;            // ............................................................... Forcer la saisie / Ce qu'il produit, expédie usuellement 

    @Column({type: "varchar",  length: 50, nullable:true   })
    @Field()
    uniteprix: string;              // ............................................................... le kilo, la tonne, le m3 (toujours au sens du voyage, machi kilométrique !!!)

    @Column({type: "double", nullable:true   })
    @Field()
    prixunitaire: number;           // ............................................................... 0.09 (ts3oud dl'frank L'kilou, arachide), 8 (Tmnia drahem Lqentar)...etc

    @Column({type: "varchar", length:100, nullable:true   })
    @Field()
    volume: string;                 // ............................................................... valeur + unité

    @Column({type: "text", nullable:true   })
    @Field()
    commentaire: string;            // ............................................................... 'Lkamiou darori 3ali, piste f jmi3', 'Bâche à prévoir et benne propre, transport de blé de qualité supérieure' ...etc etc

    @Column({type: "datetime", nullable:true  })
    @Field({nullable: true})
    debutpublication: Date;
    
    @Column({type: "datetime", nullable:true })
    @Field({nullable: true})
    finpublication: Date;
    
    @Column({type: "varchar",  length: 50, nullable:true   })
    @Field()
    statut: string;             // ............................................................... Rédigé, publié, attribué, abandonné...etc

    @Column({type: "int", nullable:true   })
    @Field({nullable: true})
    nombrepropositions: number;
    
    @ManyToOne(type => Expediteur, expediteur => expediteur.encheres)
    @Field({nullable: true})
    expediteur: Expediteur;

    @OneToMany(type => Proposition, proposition => proposition.enchere) 
    @Field(type => [Proposition], {nullable: true})
    propositions: Proposition[]; 


}