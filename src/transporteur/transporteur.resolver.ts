import { Resolver, Query, ResolveField, Args, Int, Mutation, InputType, Field, Parent } from '@nestjs/graphql';
import { Transporteur } from './transporteur.entity';
import { Vehicule } from '../vehicule/vehicule.entity';

@Resolver(of => Transporteur)
export class TransporteurResolver {

  constructor() {}

  @Query(returns => Transporteur)
  async getTransporteur(@Args('id', { type: () => Int }) id: number) {
    return await Transporteur.findOne(id);
  }

  @Query(returns => [Transporteur])
  async getTransporteurs() {
    return await Transporteur.createQueryBuilder().getMany();
    
  }

  @Query(returns => [Transporteur])
  async getOneTransporteur(@Args('id', {type: () => Int!} ) id: number) {
    return await Transporteur.findOne(id);  
  }

  @Mutation(returns => Transporteur)
  async deleteTransporteur(@Args('id', {type: () => Int}) id: number) {

    let transporteur = Transporteur.findOne(id);

    (await transporteur).remove();

    return transporteur;
  }

  @Mutation(returns => Transporteur)
  async updateTransporteur(@Args('transporteurInput') transporteurInput: Transporteur) {
    let transporteur = await Transporteur.findOne(transporteurInput.id);
    transporteur.nom = transporteurInput.nom;
    transporteur.prenom = transporteurInput.prenom;
    transporteur.type = transporteurInput.type;

    await transporteur.save();

    return transporteur;
    
  }

  @Mutation(returns => Transporteur)
  async createTransporteur(@Args('transporteurInput') transporteurInput: Transporteur) {
    let transporteur = new Transporteur();
    transporteur.nom = transporteurInput.nom;
    transporteur.prenom = transporteurInput.prenom;
    transporteur.type = transporteurInput.type;

    return await transporteur.save();
  }
  
  @ResolveField('vehicules')
  async vehicules(@Parent() transporteur: Transporteur) {
    return  await Vehicule.createQueryBuilder().where(`transporteurId = '${transporteur.id}'`).getMany();
  }

}
