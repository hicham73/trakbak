import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne, JoinTable, JoinColumn, BaseEntity} from "typeorm";
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

import {Chauffeur} from "../chauffeur/chauffeur.entity";
import {Transporteur} from "../transporteur/transporteur.entity";
import {Image} from "../image/image.entity";


@Entity()
@ObjectType()
@InputType("VehiculeInput")
export class Vehicule extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Int, {nullable: true})
    id: number;

    @Column({type: "varchar",  length: 100, nullable: true  })
    @Field({nullable: true })
   	fabricant: string;

    @Column({type: "varchar",  length: 100, nullable: true  })
    @Field({nullable: true})
   	modele: string;

    @Column({type: "varchar",  length: 100, nullable: true  })
    @Field({nullable: true})
   	type: string;

    @Column({type: "varchar",  length: 20, unique: true, nullable: true  })
    @Field({nullable: true})
   	immatriculation: string;

    @Column({ type: "double", nullable: true} )
    @Field({nullable: true})
    ptac: number;

    @Column({ type: "date", nullable: true})
    @Field({nullable: true})
    datemisecirculation: Date;

    @Column({ type: "varchar", length: 100, nullable: true  })
    @Field({nullable: true})
   	carburant?: string;

    @Column({ type: "varchar", length: 100, nullable: true  })
    @Field({nullable: true})
   	vitesse?: string;

    @Column({ type: "varchar", length: 100, nullable: true  })
    @Field({nullable: true})
   	ville?: string;

    @Column({nullable: true})
    @Field({nullable: true})
    isactive: boolean;

    @ManyToOne(type => Transporteur, transporteur => transporteur.vehicules)
    @Field(type => Transporteur, {nullable: true} )
    transporteur?: Transporteur;

    @ManyToMany(type => Chauffeur, chauffeur => chauffeur.vehicules)
    @JoinTable()
    @Field(type => [Chauffeur], {nullable: true})
    chauffeurs?: Chauffeur[];
    
    @OneToMany(type => Image, image => image.vehicule)
    @Field(type => [Image], {nullable: true} )
    images?: Image[];


}

