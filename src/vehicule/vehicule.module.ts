import { Module } from '@nestjs/common';
import { VehiculeResolver } from './vehicule.resolver';

@Module({
    providers: [VehiculeResolver]
})
export class VehiculeModule {}
