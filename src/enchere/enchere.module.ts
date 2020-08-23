import { Module } from '@nestjs/common';
import { EnchereResolver } from './enchere.resolver';
import { EnchereService } from './enchere.service';

import { ExpediteurService } from '../expediteur/expediteur.service';
import { PropositionService } from '../proposition/proposition.service';

@Module({
  providers: [EnchereResolver, EnchereService, ExpediteurService, PropositionService]
})
export class EnchereModule {}
