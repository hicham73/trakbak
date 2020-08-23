import { Module } from '@nestjs/common';
import { PropositionResolver } from './proposition.resolver';
import { PropositionService } from './proposition.service';

@Module({
  providers: [PropositionResolver, PropositionService]
})
export class PropositionModule {}
