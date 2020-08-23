import { Resolver, Query, Mutation, ResolveField, Args, Int, Parent  } from '@nestjs/graphql'
import { Enchere } from './enchere.entity'
import { PropositionService } from '../proposition/proposition.service'
import { Proposition } from '../proposition/proposition.entity'

@Resolver(of => Enchere)
export class EnchereResolver {
    constructor(private propServ: PropositionService) {}

    @Query(returns => [Enchere])
    async getEncheres() {
        return await Enchere.createQueryBuilder().getMany();
    }

    @Query(returns => [Enchere])
    async getEncheresDUnExpediteur(@Args('id', { type: () => Int }) id: number) {
      //return await Enchere.createQueryBuilder().getMany();
      return Enchere.query(`select * from enchere where expediteurid = '${id}'`);
    }

    @Query(returns => [Enchere])
    async getEnchere(@Args('id', { type: () => Int }) id: number) {
      return Enchere.query(`select * from enchere where id = '${id}'`);
    }    

    @Mutation(returns => Enchere)
    async updateEnchere(@Args('enchereInput') enchereInput: Enchere) {
      let enchere = await Enchere.findOne(enchereInput.id);
      enchere.statut = enchereInput.statut;
      enchere.villedepart = enchereInput.villedepart;
      enchere.villearrivee = enchereInput.villearrivee;
      enchere.marchandise = enchereInput.marchandise;
      enchere.uniteprix = enchereInput.uniteprix;
      enchere.prixunitaire = enchereInput.prixunitaire;
      enchere.debutpublication = enchereInput.debutpublication;
      enchere.finpublication = enchereInput.finpublication;
      enchere.volume = enchereInput.volume;
      enchere.commentaire = enchereInput.commentaire; 

      await enchere.save();

      return enchere;
    }


    @Mutation(returns => Enchere)
    async createEnchere(@Args('enchereInput') enchereInput: Enchere) {
      let enchere = new Enchere();
      enchere.id = enchereInput.id;
      enchere.statut = enchereInput.statut;
      enchere.villedepart = enchereInput.villedepart;
      enchere.villearrivee = enchereInput.villearrivee;
      enchere.marchandise = enchereInput.marchandise;
      enchere.uniteprix = enchereInput.uniteprix;
      enchere.prixunitaire = enchereInput.prixunitaire;
      enchere.debutpublication = enchereInput.debutpublication;
      enchere.finpublication = enchereInput.finpublication;
      enchere.volume = enchereInput.volume;
      enchere.commentaire = enchereInput.commentaire; 
  
      return await enchere.save(); 
    }

    @ResolveField('propositions')
    async propositions(@Parent() enchere: Enchere) {
      return await Proposition.createQueryBuilder().where(`enchereId = '${enchere.id}' `).getMany(); 
    }

  

          
}
