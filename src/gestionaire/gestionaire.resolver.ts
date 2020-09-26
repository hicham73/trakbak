import { Resolver, Query, ResolveField, Args, Int, Mutation, InputType, Field, Parent } from '@nestjs/graphql';
import { Gestionaire } from './gestionaire.entity';
import { Vehicule } from '../vehicule/vehicule.entity';

@Resolver(of => Gestionaire)
export class GestionaireResolver {

  constructor() {}

  @Query(returns => Gestionaire)
  async getGestionaire(@Args('id', { type: () => Int }) id: number) {
    return await Gestionaire.findOne(id);
  }

  @Query(returns => [Gestionaire])
  async getGestionaires() {
    return await Gestionaire.createQueryBuilder().getMany();
    
  }

  @Mutation(returns => Gestionaire)
  async deleteGestionaire(@Args('id', {type: () => Int}) id: number) {

    let gestionaire = Gestionaire.findOne(id);

    (await gestionaire).remove();

    return gestionaire;
  }

  @Mutation(returns => Gestionaire)
  async updateGestionaire(@Args('gestionaireInput') gestionaireInput: Gestionaire) {
    let gestionaire = await Gestionaire.findOne(gestionaireInput.id);
    gestionaire.transporteur = gestionaireInput.transporteur;
    gestionaire.personne = gestionaireInput.personne;

    await gestionaire.save();

    return gestionaire;
    
  }

  @Mutation(returns => Gestionaire)
  async create(@Args('gestionaireInput') gestionaireInput: Gestionaire) {
    let gestionaire = new Gestionaire();
    gestionaire.transporteur = gestionaireInput.transporteur;
    gestionaire.personne = gestionaireInput.personne;

    return await gestionaire.save();
  }

}
