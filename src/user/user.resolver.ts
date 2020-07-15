import { Resolver, Query, ResolveField, Args, Int, Mutation, InputType, Field } from '@nestjs/graphql';
import { User } from './user.entity';

@Resolver(of => User)
export class UserResolver {
  constructor() {}

  @Query(returns => User)
  async getUser(@Args('id', { type: () => Int }) id: number) {
    return await User.findOne(id);
  }

  @Query(returns => [User])
  async getUsers() {
    return await User.createQueryBuilder().getMany();
    
  }

  @Query(returns => User)
  async fetchUserByName(@Args('prenom', { type: () => String }) prenom: string) {
    let query = `select * from user where prenom = '${prenom}'`;
    
    console.log('query: ' + query);

    // let user = await User.createQueryBuilder().getOne();
    let user = await User.createQueryBuilder().where(`prenom = '${prenom}'`).getOne();

    return user;
  }

  @Mutation(returns => User)
  async deleteUser(@Args('id', {type: () => Int}) id: number) {

    let user = User.findOne(id);

    (await user).remove();

    return user;
  }

  @Mutation(returns => User)
  async updateUser(@Args('userInput') userInput: User) {
    let user = await User.findOne(userInput.id);
    user.nom = userInput.nom;
    user.prenom = userInput.prenom;
    user.type = userInput.type;
    user.password = userInput.password;
    user.email = userInput.email;

    await user.save();

    return user;
    
    // return User.query<User>(`select * from User`);
  }

  @Mutation(returns => User)
  async createUser(@Args('userInput') userInput: User) {
    let user = new User();
    user.nom = userInput.nom;
    user.prenom = userInput.prenom;
    user.type = userInput.type;
    user.password = userInput.password;
    user.email = userInput.email;

    return await user.save();
    // return User.query<User>(`select * from User`);
  }

}
