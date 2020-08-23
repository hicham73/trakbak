import { Args, Int } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { Enchere } from './enchere.entity';
import { Expediteur } from '../expediteur/expediteur.entity';

@Injectable()
export class EnchereService {
    async findExpediteurSEncheres(@Args('id', { type: () => Int }) id: number):Promise<Enchere[]> {
        return Enchere.query(`select * from enchere where expediteurId = ${id}`);
      }    

}
