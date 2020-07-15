import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, BaseEntity} from "typeorm";
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';


import {Vehicule} from "../vehicule/vehicule.entity";
import {Chauffeur} from "../chauffeur/chauffeur.entity";


@Entity()
@ObjectType()
@InputType("TransporteurInput")
export class Transporteur extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column({type: "varchar",  length: 100  })
    @Field({nullable: true})
    type: string;         // ............................................................... Moul L'Kamiou wella entreprise qui gère une flotte

    @Column({type: "varchar",  length: 100  })
    @Field({nullable: true})
   	nom: string;          // ............................................................... Nom de l'entreprise si Type =Entreprise

    @Column({type: "varchar",  length: 100, nullable:true  })
    @Field({nullable: true})
   	prenom?: string;      // ............................................................... Vide si entreprise

    @Column({type: "varchar",  length: 20, unique: true  })
   	cin: string;          // ............................................................... Vide si entreprise

    @Column({type: "varchar",  length: 20, unique: true  })
   	permis: string;       // ............................................................... Vide si entreprise

    @Column()
    isactive: boolean;


    @OneToMany(type => Vehicule, vehicule => vehicule.transporteur) 
    vehicules: Vehicule[];

    @OneToMany(type => Chauffeur, chauffeur => chauffeur.transporteur) 
    chauffeurs: Chauffeur[];


}