import { Module } from '@nestjs/common';
import {PersonneResolver} from './personne.resolver'

@Module({
    providers: [PersonneResolver]
})
export class PersonneModule {}
