import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PhotoModule } from './photo/photo.module'
import { PhotoService } from './photo/photo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly photoService: PhotoService,
  ) {}

  @Get()
  getHello(): string {
    var name: string = '';
    this.photoService.findAll().then(function (photos) {
      photos.forEach(function(p) {
        name += p.name;
      } );
      
    })

    return name;
  }

}
