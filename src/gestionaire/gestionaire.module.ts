import { Module } from '@nestjs/common';
import {GestionaireResolver} from './gestionaire.resolver'

@Module({

    providers: [GestionaireResolver]
})
export class GestionaireModule {}
