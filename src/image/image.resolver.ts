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
  async getImages() {
    return await Image.createQueryBuilder().getMany();
    
  }

  @Query(returns => Image)
  async fetchImageByName(@Args('prenom', { type: () => String }) prenom: string) {
    let query = `select * from image where prenom = '${prenom}'`;
    
    console.log('query: ' + query);

    // let image = await Image.createQueryBuilder().getOne();
    let image = await Image.createQueryBuilder().where(`prenom = '${prenom}'`).getOne();

    return image;
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
