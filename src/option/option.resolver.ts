import { Resolver, Query, ResolveField, Args, Int, Mutation, InputType, Field, Parent } from '@nestjs/graphql';
import { Option } from './option.entity';

@Resolver(of => Option)
export class OptionResolver {
  constructor() {}

  @Query(returns => Option)
  async getOption(@Args('id', { type: () => Int }) id: number) {
    return await Option.findOne(id);
  }

  @Query(returns => [Option])
  async getAllOptions() {
    return await Option.createQueryBuilder('option')
                        .getMany();
    
  }
  @Query(returns => [Option])
  async getOptionsByGroup(@Args('groupid', {type: () => Int}) groupid: number) {
    return await Option.createQueryBuilder('option')
                        .where("option.groupid = :groupid", { vehiculeId: groupid })
                        .getMany();
    
  }

  @Mutation(returns => Option)
  async deleteOption(@Args('id', {type: () => Int}) id: number) {

    let option = Option.findOne(id);

    (await option).remove();

    return option;
  }

  @Mutation(returns => Option)
  async updateOption(@Args('optionInput') optionInput: Option) {
    let option = await Option.findOne(optionInput.id);
    option.groupid = optionInput.groupid;
    option.groupname = optionInput.groupname;
    option.value = optionInput.value;
    option.name = optionInput.name;

    await option.save();

    return option;
    
  }

  @Mutation(returns => Option)
  async createOption(@Args('optionInput') optionInput: Option) {
    let option = new Option()
    option.groupid = optionInput.groupid;
    option.groupname = optionInput.groupname;
    option.value = optionInput.value;
    option.name = optionInput.name;

    return await option.save();
  }


}
