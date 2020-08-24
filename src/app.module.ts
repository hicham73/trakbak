import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { GraphQLModule } from '@nestjs/graphql';

import { OptionModule } from './option/option.module';

import { UserModule } from './user/user.module';

import { TransporteurModule } from './transporteur/transporteur.module';
import { VehiculeModule } from './vehicule/vehicule.module';
import { ChauffeurModule } from './chauffeur/chauffeur.module';
import { ImageModule } from './image/image.module';

import { ExpediteurModule } from './expediteur/expediteur.module';
import { PropositionModule } from './proposition/proposition.module';
import { EnchereModule } from './enchere/enchere.module';

@Module({
  imports: [
    DatabaseModule,
    ExpediteurModule,
    UserModule,
    TransporteurModule,
    VehiculeModule,
    ChauffeurModule,
    ExpediteurModule,
    PropositionModule,
    EnchereModule,
    ImageModule,
    OptionModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
      include: [ExpediteurModule, EnchereModule, PropositionModule, UserModule, 
                ChauffeurModule, VehiculeModule, TransporteurModule, ImageModule,
                OptionModule],
      autoSchemaFile: process.cwd() +  '/src/graphql.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseModule],
})
export class AppModule {}
