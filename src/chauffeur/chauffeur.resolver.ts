import { Resolver, Query, ResolveField, Args, Int, Mutation, InputType, Field, Parent } from '@nestjs/graphql';
import { Chauffeur } from './chauffeur.entity';
import { Vehicule } from '../vehicule/vehicule.entity';

@Resolver(of => Chauffeur)
export class ChauffeurResolver {

  constructor() {}

  @Query(returns => Chauffeur)
  async get(@Args('id', { type: () => Int }) id: number) {
    return await Chauffeur.findOne(id);
  }

  @Query(returns => [Chauffeur])
  async gets() {
    return await Chauffeur.createQueryBuilder().getMany();
    
  }

  @Mutation(returns => Chauffeur)
  async delete(@Args('id', {type: () => Int}) id: number) {

    let chauffeur = Chauffeur.findOne(id);

    (await chauffeur).remove();

    return chauffeur;
  }

  @Mutation(returns => Chauffeur)
  async update(@Args('chauffeurInput') chauffeurInput: Chauffeur) {
    let chauffeur = await Chauffeur.findOne(chauffeurInput.id);
    chauffeur.transporteur = chauffeurInput.transporteur;
    chauffeur.personne = chauffeurInput.personne;

    await chauffeur.save();

    return chauffeur;
    
  }

  @Mutation(returns => Chauffeur)
  async create(@Args('chauffeurInput') chauffeurInput: Chauffeur) {
    let chauffeur = new Chauffeur();
    chauffeur.transporteur = chauffeurInput.transporteur;
    chauffeur.personne = chauffeurInput.personne;

    return await chauffeur.save();
  }

}
