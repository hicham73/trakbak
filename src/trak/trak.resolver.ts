import { Resolver, Query, ResolveField, Args, Int } from '@nestjs/graphql';
import { Trak } from './trak.entity';


@Resolver(of => Trak)
export class TrakResolver {
  constructor() {}

  @Query(returns => Trak)
  async getTrak(@Args('id', { type: () => Int }) id: number) {
    return Trak.findOne(id);
  }

  @Query(returns => Trak)
  async fetchTrakByName(@Args('name', { type: () => String }) name: string) {
    return Trak.query(`select * from trak where name = '${name}'`);
  }

  @Query(returns => [Trak])
  async fetchTraks() {
    return Trak.findAll();
    // return Trak.query<Trak>(`select * from trak`);
  }

}