import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, BaseEntity} from "typeorm";
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

import {Vehicule} from "../vehicule/vehicule.entity";
import {Chauffeur} from "../chauffeur/chauffeur.entity";
import {Gestionaire} from "../gestionaire/gestionaire.entity";
import {Proposition} from "../proposition/proposition.entity";


@Entity()
@ObjectType()
@InputType("TransporteurInput")
export class Transporteur extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Int, {nullable: true})
    id: number;

    @Column({type: "int", nullable:true   })
    @Field({nullable: true})
    type: number;

    @Column({type: "varchar",  length: 100, nullable:true   })
    @Field({nullable: true})
   	nom: string;

    @Column({type: "varchar",  length: 100, nullable:true  })
    @Field({nullable: true})
   	prenom: string;

    @Column({type: "varchar",  length: 20, nullable: true   })
    @Field({nullable: true})
   	cin: string;

    @Column({type: "varchar",  length: 20, nullable: true   })
    @Field({nullable: true})
   	permis: string;

    @Column({type: 'tinyint', default: 0, nullable: true})
    isactive: boolean;

    @Column({type: "int",  nullable:true })
    @Field({nullable: true})
   	nbrvehicules: number;

    @Column({type: "int",  nullable:true })
    @Field({nullable: true})
    nbrvoyages: number;

    @Column({type: "date",  nullable:true })
    @Field({nullable: true})
    dateinscription: Date;
         
    @Column({type: "date",  nullable:true })
    @Field({nullable: true})
    dateexpirationpermis: Date;

    @Column({type: "tinyint", nullable:true   })
    @Field({nullable: true})
    cote: number;
   
         
    @OneToMany(type => Vehicule, vehicule => vehicule.transporteur)
    @Field( type => [Vehicule], {nullable: true}) 
    vehicules: Vehicule[];

    @OneToMany(type => Chauffeur, chauffeur => chauffeur.transporteur) 
    chauffeurs: Chauffeur[];

    @OneToMany(type => Gestionaire, gestionaire => gestionaire.transporteur) 
    gestionaires: Gestionaire[];

        
    @OneToMany(type => Proposition, proposition => proposition.transporteur) 
    @Field(type => [Proposition], {nullable: true})
    propositions: Proposition[]; 


}