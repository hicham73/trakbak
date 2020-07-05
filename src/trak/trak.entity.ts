import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';


@Entity()
@ObjectType()
export class Trak extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column({ length: 500 })
  @Field({nullable: true})
  name?: string;

  @Column({type: 'text', nullable: true})
  @Field({ nullable: true })
  description: string;

  @Column({type: 'int', nullable: true})
  @Field({ nullable: true })
  year?: number;

  @Column({nullable: true})
  @Field({ nullable: true })
  model?: string;

  @Column({nullable: true})
  @Field({ nullable: true })
  milage: number

  @Column({nullable: true})
  @Field({ nullable: true })
  isactive: boolean;

  static findByName(name: string) {
    return this.createQueryBuilder("trak")
        .where("trak.name = :name", { name })
        .getMany();
  }

  static findAll() {
    return this.createQueryBuilder("trak").getMany();
  }

}