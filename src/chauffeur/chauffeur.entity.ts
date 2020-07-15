import {Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, JoinColumn, BaseEntity} from "typeorm";
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

import {Vehicule} from "../vehicule/vehicule.entity";
import {Transporteur} from "../transporteur/transporteur.entity";


@Entity()
@ObjectType()
@InputType("ChauffeurInput")
export class Chauffeur extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar",  length: 100  })
   	nom: string;

    @Column({type: "varchar",  length: 100  })
   	prenom: string;

    @Column({type: "varchar",  length: 20, unique: true  })
   	cin: string;          

    @Column({type: "varchar",  length: 20, unique: true  })
   	permis: string;   

    @Column("date")
    dob: Date;            // ............................................................... Certificat chez l'ophtalmo ?

    @Column()
    isactive: boolean;    // ............................................................... Peut participer ou pas ? gelé ? Qawwad'ha f les derniers voyages ?

    @ManyToOne(type => Transporteur, transporteur => transporteur.chauffeurs)
    transporteur: Transporteur;

    @ManyToMany(type => Vehicule, vehicule => vehicule.chauffeurs)
    vehicules: Vehicule[];    

}