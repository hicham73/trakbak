import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({type: 'text', nullable: true})
  description: string;

  @Column({nullable: true})
  filename: string;

  @Column({type: 'int', nullable: true})
  views: number;

  @Column({nullable: true})
  isPublished: boolean;

  static findByName(name: string, filename: string) {
    return this.createQueryBuilder("user")
        .where("photo.name = :name", { name })
        .andWhere("photo.filename = :filename", { filename })
        .getMany();
  }

}