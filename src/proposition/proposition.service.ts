import { Args, Int } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';

import { Proposition } from './proposition.entity';
import { Enchere } from '../enchere/enchere.entity';

@Injectable()
export class PropositionService {
    constructor() {}
    
    async findEnchereSPropositions(@Args('id', { type: () => Int }) id: number):Promise<Proposition[]> {
        return Proposition.query(`select * from proposition where enchereId = ${id}`);
      }    

}
