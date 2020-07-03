import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffreController } from './offre/offre.controller';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    PhotoModule,
  ],
  controllers: [AppController, OffreController],
  providers: [AppService, DatabaseModule],
})
export class AppModule {}
