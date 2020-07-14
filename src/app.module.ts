import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffreController } from './offre/offre.controller';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { PhotoModule } from './photo/photo.module';
import { TrakModule } from './trak/trak.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ExpediteurModule } from './expediteur/expediteur.module';
import { ProducteurModule } from './producteur/producteur.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PhotoModule,
    TrakModule,
    ExpediteurModule,
    ProducteurModule,
    UserModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
      include: [TrakModule, ExpediteurModule, ProducteurModule, UserModule],
      autoSchemaFile: process.cwd() +  '/src/schema.gql',
    }),
    UserModule,
  ],
  controllers: [AppController, OffreController],
  providers: [AppService, DatabaseModule],
})
export class AppModule {}
