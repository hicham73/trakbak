import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {Question} from "./question.entity";

@Entity()
export class Category extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Question, question => question.categories)
    questions: Question[];

}