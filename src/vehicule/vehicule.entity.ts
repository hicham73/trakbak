import {Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, JoinTable, JoinColumn, BaseEntity} from "typeorm";
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

import {Chauffeur} from "../chauffeur/chauffeur.entity";
import {Transporteur} from "../transporteur/transporteur.entity";


@Entity()
@ObjectType()
@InputType("VehiculeInput")
export class Vehicule extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column({type: "varchar",  length: 100  })
    @Field({nullable: true})
   	fabricant: string;

    @Column({type: "varchar",  length: 100  })
    @Field({nullable: true})
   	modele: string;

    @Column({type: "varchar",  length: 100  })
    @Field({nullable: true})
   	type: string;

    @Column({type: "varchar",  length: 20, unique: true  })
    @Field({nullable: true})
   	immatriculation: string;

    @Column("double")
    @Field({nullable: true})
    ptac: number;

    @Column("date")
    datemisecirculation: Date;

    @Column({ type: "varchar", length: 100, nullable: true  })
    @Field({nullable: true})
   	carburant?: string;

    @Column({ type: "varchar", length: 100, nullable: true  })
   	vitesse?: string;

    @Column({ type: "varchar", length: 100, nullable: true  })
    @Field({nullable: true})
   	ville?: string;

    @Column()
    @Field({nullable: true})
    isactive: boolean;

    @ManyToOne(type => Transporteur, transporteur => transporteur.vehicules)
    transporteur: Transporteur;

    @ManyToMany(type => Chauffeur, chauffeur => chauffeur.vehicules)
    @JoinTable()
    // @Field(type => Chauffeur[])
    chauffeurs: Chauffeur[];    

}

