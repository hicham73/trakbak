import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { GraphQLModule } from '@nestjs/graphql';
import { ExpediteurModule } from './expediteur/expediteur.module';
import { ProducteurModule } from './producteur/producteur.module';
import { UserModule } from './user/user.module';
import { VehiculeModule } from './vehicule/vehicule.module';
import { ChauffeurModule } from './chauffeur/chauffeur.module';
import { TransporteurModule } from './transporteur/transporteur.module';

@Module({
  imports: [
    ExpediteurModule,
    ProducteurModule,
    UserModule,
    ChauffeurModule,
    VehiculeModule,
    TransporteurModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
      include: [ExpediteurModule, ProducteurModule, UserModule, ChauffeurModule, VehiculeModule, TransporteurModule],
      autoSchemaFile: process.cwd() +  '/src/graphql.gql',
    }),
    UserModule,
    VehiculeModule,
    ChauffeurModule,
    TransporteurModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseModule],
})
export class AppModule {}
