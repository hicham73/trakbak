import { Resolver, Query, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import {Proposition} from './proposition.entity'
import {Transporteur} from '../transporteur/transporteur.entity'

@Resolver(of => Proposition)
export class PropositionResolver {
    constructor() {}

    @Query(returns => [Proposition])
    async getPropositions() {
        return await Proposition.createQueryBuilder().getMany();
    }

    @Query(returns => [Proposition])
    async getPropositionsDUneEnchere(@Args('id', { type: () => Int }) id: number) {
      //return await Enchere.createQueryBuilder().getMany();
      return Proposition.query(`select proposition.* from proposition where enchereid = '${id}'`);
    }



}
