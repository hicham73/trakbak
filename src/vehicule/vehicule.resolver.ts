import { Resolver, Query, ResolveField, Args, Int, Mutation, InputType, Field, Parent } from '@nestjs/graphql';
import { Vehicule } from './vehicule.entity';
import { Chauffeur } from "../chauffeur/chauffeur.entity";

@Resolver(of => Vehicule)
export class VehiculeResolver {
  constructor() {}

  @Query(returns => Vehicule)
  async getVehicule(@Args('id', { type: () => Int }) id: number) {
    return await Vehicule.findOne(id);
  }

  @Query(returns => [Vehicule])
  async getVehicules() {
    return await Vehicule.createQueryBuilder().getMany();
    
  }

  @Query(returns => Vehicule)
  async fetchVehiculeByName(@Args('prenom', { type: () => String }) prenom: string) {
    let query = `select * from vehicule where prenom = '${prenom}'`;
    
    console.log('query: ' + query);

    // let vehicule = await Vehicule.createQueryBuilder().getOne();
    let vehicule = await Vehicule.createQueryBuilder().where(`prenom = '${prenom}'`).getOne();

    return vehicule;
  }

  @Mutation(returns => Vehicule)
  async deleteVehicule(@Args('id', {type: () => Int}) id: number) {

    let vehicule = Vehicule.findOne(id);

    (await vehicule).remove();

    return vehicule;
  }

  @Mutation(returns => Vehicule)
  async updateVehicule(@Args('vehiculeInput') vehiculeInput: Vehicule) {
    let vehicule = await Vehicule.findOne(vehiculeInput.id);
    vehicule.modele = vehiculeInput.modele;
    vehicule.ptac = vehiculeInput.ptac;
    vehicule.type = vehiculeInput.type;
    vehicule.ville = vehiculeInput.ville;
    vehicule.vitesse = vehiculeInput.vitesse;
    vehicule.fabricant = vehiculeInput.fabricant;
    vehicule.immatriculation = vehiculeInput.immatriculation;

    await vehicule.save();

    return vehicule;
    
    // return Vehicule.query<Vehicule>(`select * from Vehicule`);
  }

  @Mutation(returns => Vehicule)
  async createVehicule(@Args('vehiculeInput') vehiculeInput: Vehicule) {
    let vehicule = await Vehicule.findOne(vehiculeInput.id);
    vehicule.modele = vehiculeInput.modele;
    vehicule.ptac = vehiculeInput.ptac;
    vehicule.type = vehiculeInput.type;
    vehicule.ville = vehiculeInput.ville;
    vehicule.vitesse = vehiculeInput.vitesse;
    vehicule.fabricant = vehiculeInput.fabricant;
    vehicule.immatriculation = vehiculeInput.immatriculation;

    return await vehicule.save();
    // return Vehicule.query<Vehicule>(`select * from Vehicule`);
  }

//   @ResolveField()
//   async chaffeurs(@Parent() vehicule: Vehicule) {
//     // const { id } = vehicule;
//     return  await Vehicule.createQueryBuilder().where(`id = '${vehicule.id}'`).getMany();
//   }

}