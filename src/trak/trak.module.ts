import { Module } from '@nestjs/common';
import { TrakController } from './trak.controller';
import { TrakResolver } from './trak.resolver';

@Module({
  controllers: [TrakController],
  providers: [TrakResolver]
})
export class TrakModule {}
