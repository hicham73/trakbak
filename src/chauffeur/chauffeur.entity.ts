import {Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, JoinColumn, BaseEntity} from "typeorm";
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

import {Vehicule} from "../vehicule/vehicule.entity";
import {Transporteur} from "../transporteur/transporteur.entity";


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

    @Column({type: "varchar",  length: 20, unique: true  })
    @Field()
   	cin: string;          

    @Column({type: "varchar",  length: 20, unique: true  })
    @Field()
   	permis: string;   

    @Column("date")
    dob: Date;            // ............................................................... Certificat chez l'ophtalmo ?

    @Column()
    @Field()
    isactive: boolean;    // ............................................................... Peut participer ou pas ? gelé ? Qawwad'ha f les derniers voyages ?

    @ManyToOne(type => Transporteur, transporteur => transporteur.chauffeurs)
    @Field(type => [Transporteur])
    transporteur: Transporteur;

    @ManyToMany(type => Vehicule, vehicule => vehicule.chauffeurs)
    @Field(type => [Vehicule])
    vehicules: Vehicule[];    

}