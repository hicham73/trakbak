import { Resolver, Query, ResolveField, Args, Int, Mutation, InputType, Field, Parent } from '@nestjs/graphql';
import { Transporteur } from './transporteur.entity';
import { VehiculeResolver } from 'src/vehicule/vehicule.resolver';
import { Vehicule } from 'src/vehicule/vehicule.entity';

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
    
    // return Transporteur.query<Transporteur>(`select * from Transporteur`);
  }

  @Mutation(returns => Transporteur)
  async createTransporteur(@Args('transporteurInput') transporteurInput: Transporteur) {
    let transporteur = new Transporteur();
    transporteur.nom = transporteurInput.nom;
    transporteur.prenom = transporteurInput.prenom;
    transporteur.type = transporteurInput.type;

    return await transporteur.save();
    // return Transporteur.query<Transporteur>(`select * from Transporteur`);
  }

  
  @ResolveField('vehicules')
  async vehicules(@Parent() transporteur: Transporteur) {
    // const { id } = vehicule;
    return  await Vehicule.createQueryBuilder().where(`transporteurId = '${transporteur.id}'`).getMany();
  }

}
