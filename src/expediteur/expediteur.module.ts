import { Module } from '@nestjs/common';
import { EnchereService } from '../enchere/enchere.service'
import { ExpediteurResolver } from './expediteur.resolver';
import { ExpediteurController } from './expediteur.controller';
import { ExpediteurService } from './expediteur.service';

@Module({
  providers: [ExpediteurResolver, EnchereService, ExpediteurService],
  controllers: [ExpediteurController]
})
export class ExpediteurModule {}
