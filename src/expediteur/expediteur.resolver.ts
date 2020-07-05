import { Resolver, Query, Mutation, ResolveField, Args, Int, InputType } from '@nestjs/graphql';
import { Expediteur } from './expediteur.entity'

@Resolver(of => Expediteur)
export class ExpediteurResolver {
    constructor() {}

    @Query(returns => Expediteur)
    async getExpediteur(@Args('id', { type: () => Int }) id: number) {
      return Expediteur.findOne(id);
    }
  
    @Query(returns => Expediteur)
    async fetchExpediteurByName(@Args('name', { type: () => String }) name: string) {
      return Expediteur.query(`select * from expediteur where name = ${name}`);
    }
  
    @Query(returns => [Expediteur])
    async fetchExpediteurs() {
      return Expediteur.query('select * from expediteur');
    }
    
    // @Mutation(returns => [Expediteur])
    // async upExpediteur(@Args('data') data: Expediteur) {
    //   return Expediteur.save([data]);
    // }
    @Mutation(returns => Expediteur)
    async upNbrDepotsExpediteur(@Args('id') id: number) {
      let exp = new Expediteur();
      exp.id = id;
      exp.nbrdepots = 1000;
      Expediteur.save(exp);
      return exp;
    }
}






