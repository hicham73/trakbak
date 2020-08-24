import { Resolver, Query, ResolveField, Args, Int, Mutation, InputType, Field, Parent } from '@nestjs/graphql';
import { Image } from './image.entity';
import { Vehicule } from "../vehicule/vehicule.entity";

@Resolver(of => Image)
export class ImageResolver {
  constructor() {}

  @Query(returns => Image)
  async getImage(@Args('id', { type: () => Int }) id: number) {
    return await Image.findOne(id);
  }



  @Query(returns => [Image])
  async getImages(@Args('vehiculeId', {type: () => Int}) vehiculeId: number) {
    return await Image.createQueryBuilder('image')
                        .where("image.vehiculeId = :vehiculeId", { vehiculeId: vehiculeId })
                        .getMany();
    
  }

  @Mutation(returns => Image)
  async deleteImage(@Args('id', {type: () => Int}) id: number) {

    let image = Image.findOne(id);

    (await image).remove();

    return image;
  }

  @Mutation(returns => Image)
  async updateImage(@Args('imageInput') imageInput: Image) {
    let image = await Image.findOne(imageInput.id);
    image.data = imageInput.data;
    image.vehicule = imageInput.vehicule;

    await image.save();

    return image;
    
    // return Image.query<Image>(`select * from Image`);
  }

  @Mutation(returns => Image)
  async createImage(@Args('imageInput') imageInput: Image) {
    let image = new Image()
    image.data = imageInput.data
    image.vehicule = new Vehicule();
    image.vehicule.id = imageInput.vehicule.id;

    return await image.save();
    // return Image.query<Image>(`select * from Image`);
  }

//   @ResolveField()
//   async chaffeurs(@Parent() image: Image) {
//     // const { id } = image;
//     return  await Image.createQueryBuilder().where(`id = '${image.id}'`).getMany();
//   }

}
