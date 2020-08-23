import { Resolver, Query, Mutation, ResolveField, Args, Int, InputType, Parent } from '@nestjs/graphql';
import { Expediteur } from './expediteur.entity'
import { Enchere } from '../enchere/enchere.entity'
import { EnchereService } from '../enchere/enchere.service'


@Resolver(of => Expediteur)
export class ExpediteurResolver {
    constructor(private readonly enchereService: EnchereService) {}

    @Query(returns => Expediteur)
    async getExpediteur(@Args('id', { type: () => Int }) id: number) {
      return Expediteur.findOne(id);
    }

    @Query(returns => Expediteur)
    async getExpediteursEncheres(@Args('id', { type: () => Int }) id: number) {
      return Expediteur.findOne(id);
    }
  /* 
    @Query(returns => Expediteur)
    async fetchExpediteurByName(@Args('name', { type: () => String }) name: string) {
      return Expediteur.query(`select id,nom,prenom,type,adresse1,adresse2,ville,pays,marchandise,cin,isactive from expediteur where nom = '${name}'`);
    } */
  
/*     @Query(returns => [Expediteur])
    async fetchExpediteurs() {
      return Expediteur.query('select * from expediteur');
    } */
 
    
    @ResolveField(returns => [Enchere])
    async encheres(@Parent() expediteur: Expediteur) {
      const { id } = expediteur;
      return this.enchereService.findExpediteurSEncheres(id);
    }    
    
    
 
    @Query(returns => [Expediteur])
    async getExpediteurs() {
      return await Expediteur.createQueryBuilder().getMany();
    }

 
    
    // @Mutation(returns => [Expediteur])
    // async upExpediteur(@Args('data') data: Expediteur) {
    //   return Expediteur.save([data]);
    // }
/*     @Mutation(returns => Expediteur)
    async upNbrDepotsExpediteur(@Args('id') id: number) {
      let exp = new Expediteur();
      exp.id = id;
      exp.nbrdepots = 1000;
      Expediteur.save(exp);
      return exp;
    } */
}






