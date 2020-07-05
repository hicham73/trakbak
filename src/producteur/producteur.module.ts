import { Module } from '@nestjs/common';
import { ProducteurResolver } from './producteur.resolver';

@Module({
  providers: [ProducteurResolver]
})
export class ProducteurModule {}
