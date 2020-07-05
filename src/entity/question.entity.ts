import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Category} from "./category.entity";

@Entity()
export class Question extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToMany(type => Category, category => category.questions, {
        cascade: true
    })
    @JoinTable()
    categories: Category[];

}