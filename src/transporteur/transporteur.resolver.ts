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
  async updateTransporteur(@Args('transporteurInput') input: Transporteur) {
    let t = await Transporteur.findOne(input.id)
    t.type = input.type
    t.nom = input.nom
    t.prenom = input.prenom
   	t.cin = input.cin
   	t.permis = input.permis
   	t.isactive = input.isactive
    t.nbrvehicules = input.nbrvehicules
    t.nbrvoyages = input.nbrvoyages
    t.cote = input.cote
    t.dateinscription = input.dateinscription
    t.dateexpirationpermis = input.dateexpirationpermis


    await t.save();

    return t;
    
    // return Transporteur.query<Transporteur>(`select * from Transporteur`);
  }

  @Mutation(returns => Transporteur)
  async createTransporteur(@Args('transporteurInput') input: Transporteur) {
    let t = new Transporteur();
    t.type = input.type
    t.nom = input.nom
    t.prenom = input.prenom
   	t.cin = input.cin
   	t.permis = input.permis
   	t.isactive = input.isactive
    t.nbrvehicules = input.nbrvehicules
    t.nbrvoyages = input.nbrvoyages
    t.cote = input.cote
    t.dateinscription = input.dateinscription;
    t.dateexpirationpermis = input.dateexpirationpermis
 

    return await t.save();
    // return Transporteur.query<Transporteur>(`select * from Transporteur`);
  }

  
  @ResolveField('vehicules')
  async vehicules(@Parent() transporteur: Transporteur) {
    // const { id } = vehicule;
    return  await Vehicule.createQueryBuilder().where(`transporteurId = '${transporteur.id}'`).getMany();
  }

}
