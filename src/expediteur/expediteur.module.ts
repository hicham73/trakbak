import { Module } from '@nestjs/common';
import { ExpediteurResolver } from './expediteur.resolver';
import { ExpediteurController } from './expediteur.controller';

@Module({
  providers: [ExpediteurResolver],
  controllers: [ExpediteurController]
})
export class ExpediteurModule {}
