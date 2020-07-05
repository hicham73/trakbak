import { Resolver, Query, ResolveField, Args, Int } from '@nestjs/graphql';
import { Producteur } from './producteur.entity';


@Resolver(of => Producteur)
export class ProducteurResolver {
  constructor() {}

  @Query(returns => Producteur)
  async getProducteur(@Args('id', { type: () => Int }) id: number) {
    return Producteur.findOne(id);
  }

  
  @Query(returns => [Producteur])
  async fetchTraks() {
    return Producteur.createQueryBuilder('producteur').getMany();
  }

}