import {Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity} from "typeorm";
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import {Enchere} from "../enchere/enchere.entity"; 


@Entity()
@ObjectType() 
@InputType("ExpediteurInput") 
export class Expediteur extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field()
    id: number;           // ............................................................... Réfléchir à créer une interface pour tout ce qui est structure, société, etc ???

    @Column({type: "varchar",  length: 100, nullable:true   })
    @Field()
    type: string;         // ............................................................... particulier ponctuel ou entreprise de production (en réalité, aussi, Facture ou au noir?)

   @Column({type: "varchar",  length: 100, nullable:true   })
   @Field()
   nom: string;          // ............................................................... Nom de l'entreprise si Type =Entreprise

    @Column({type: "varchar",  length: 100, nullable:true  })
    @Field()
   	prenom?: string;      // ............................................................... Vide si entreprise

    @Column({type: "varchar",  length: 20})
    @Field()
   	cin: string;          // ............................................................... Patente ou Registre du commerce si entreprise

    @Column({type: "varchar",  length: 500, nullable:true   })
    @Field()
    marchandise: string;  // ............................................................... Forcer la saisie / Ce qu'il produit, expédie usuellement 

    @Column({type: "varchar",  length: 255, nullable:true   })
    @Field()
    adresse1: string;     // ............................................................... Vide si entreprise

    @Column({type: "varchar",  length: 255, nullable:true    })
    @Field()
    adresse2?: string;     

    @Column({type: "varchar",  length: 255, nullable:true   })
    @Field()
    ville: string;     
 
    @Column({type: "varchar",  length: 255, nullable:true     })
    @Field()
    pays: string;     
 


    @Column({type: "tinyint", default: 0})
    @Field()
    isactive: boolean;    // ............................................................... Peut utiliser nos services ou expéditeur litigieux éteint ...


/*     @OneToMany(type => Offre, offre => offre.expediteur) 
    offres: Offre[];  */

    @OneToMany(type => Enchere, enchere => enchere.expediteur) 
    encheres: Enchere[]; 


}