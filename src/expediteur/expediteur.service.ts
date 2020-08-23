import { Args, Int } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { Enchere } from '../enchere/enchere.entity';
import { Expediteur } from './expediteur.entity';

@Injectable()
export class ExpediteurService {
    async findEncheresExpediteur(@Args('id', { type: () => Int }) id: number):Promise<Expediteur> {
        return Expediteur.query(`select * from expediteur where id = ${id}`);
      }    

      async findOneById(@Args('id', { type: () => Int }) id: number):Promise<Expediteur> {
        return Expediteur.query(`select * from expediteur where id = ${id}`);
      }  
       
}
