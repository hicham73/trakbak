import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import { isNull } from 'util';
// import { UserInput } from './user.resolver';


// Column Types for mysql
// bit, int, integer, tinyint, smallint, mediumint, bigint, float, double, double precision, dec, 
// decimal, numeric, fixed, bool, boolean, date, datetime, timestamp, time, year, char, nchar, 
// national char, varchar, nvarchar, national varchar, text, tinytext, mediumtext, blob, longtext, 
// tinyblob, mediumblob, longblob, enum, set, json, binary, varbinary, geometry, point, linestring, 
// polygon, multipoint, multilinestring, multipolygon, geometrycollection

@Entity()
@ObjectType()
@InputType("UserInput")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;
  
    @Column({type: "varchar", length: 100, nullable: true })
    @Field({nullable: true})
    username?: string;

    @Column({type: "varchar", length: 50, nullable: true })
    @Field()
    password?: string;

    @Column({type: "varchar", length: 100, nullable: true })
    @Field({nullable: true})
    prenom?: string;

    @Column({type: "varchar", length: 100, nullable: true })
    @Field({nullable: true})
    nom?: string;

    @Column({type: "varchar", length: 50, nullable: true })
    @Field({nullable: true})
    email?: string;
  
    @Column({type: "tinyint", nullable: true})
    @Field(type => Int)
    type?: number;
  
    @Column({type: "datetime", nullable: true})
    @Field({nullable: true})
    CreatedOn?: Date;

    @Column({type: "datetime", nullable: true})
    @Field({nullable: true})
    ModifiedOn?: Date;

}
