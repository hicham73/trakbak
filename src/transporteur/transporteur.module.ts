import { Module } from '@nestjs/common';
import { TransporteurResolver } from './transporteur.resolver'

@Module({
    
    providers: [TransporteurResolver]
})
export class TransporteurModule {}
