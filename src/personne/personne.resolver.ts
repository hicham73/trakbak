import { Resolver, Query, ResolveField, Args, Int, Mutation, InputType, Field, Parent } from '@nestjs/graphql';
import { Personne } from './personne.entity';
import { Vehicule } from '../vehicule/vehicule.entity';

@Resolver(of => Personne)
export class PersonneResolver {

  constructor() {}

  @Query(returns => Personne)
  async getPersonne(@Args('id', { type: () => Int }) id: number) {
    return await Personne.findOne(id);
  }

  @Query(returns => [Personne])
  async getPersonnes() {
    return await Personne.createQueryBuilder().getMany();
    
  }

  @Mutation(returns => Personne)
  async deletePersonne(@Args('id', {type: () => Int}) id: number) {

    let personne = Personne.findOne(id);

    (await personne).remove();

    return personne;
  }

  @Mutation(returns => Personne)
  async updatePersonne(@Args('personneInput') personneInput: Personne) {
    let personne = await Personne.findOne(personneInput.id);
    personne.nom = personneInput.nom;
    personne.prenom = personneInput.prenom;

    await personne.save();

    return personne;
    
  }

  @Mutation(returns => Personne)
  async createPersonne(@Args('personneInput') personneInput: Personne) {
    let personne = new Personne();
    personne.nom = personneInput.nom;
    personne.prenom = personneInput.prenom;

    return await personne.save();
  }

}
