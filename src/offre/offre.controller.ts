import { Controller, Get } from '@nestjs/common';
import { PhotoService } from '../photo/photo.service'
import {getConnection} from "typeorm";
import {getManager} from "typeorm";
import {Photo} from "../entity/photo.entity"
import { PhotoModule } from "../photo/photo.module"
import { photoProviders } from 'src/photo/photo.providers';
import { getRepository } from 'typeorm'



@Controller('offre')
export class OffreController {
    @Get('allnames')
    async getAllNames(): Promise<string> {

        var potoRepository = getRepository(Photo);

        var name: string = '';

        await potoRepository.findOne(1).then(function(p) {
            name += p.id + ' - ' + p.name;
        });

        // const em = getManager();
        // em.findOne(Photo,1).then(function (photo) {
        //     photo.name = 'aaaaaaaaa';
        //     photo.filename = 'new file name';
        //     em.save(photo);
        // });

        // const user = getManager()
        // .createQueryBuilder("Photo", "photo")
        // .where("photo.id = :id", { id: 1 })
        // .getOne();



        return "response from controller offre: " + name;
    }

    @Get('one')
    async getOneName(): Promise<Photo> {

        let potoRepository = getRepository(Photo);

        let photo: Photo;

        await potoRepository.findOne(1).then(function(p) {
            photo = p;
        });

        

        // const em = getManager();
        // em.findOne(Photo,1).then(function (photo) {
        //     photo.name = 'aaaaaaaaa';
        //     photo.filename = 'new file name';
        //     em.save(photo);
        // });

        // const user = getManager()
        // .createQueryBuilder("Photo", "photo")
        // .where("photo.id = :id", { id: 1 })
        // .getOne();



        return photo;
    }

    @Get('create')
    async createPhoto(): Promise<string> {
        let photo = new Photo();

        photo.id = 2;
        photo.name = 'photo 2';
        photo.filename = 'file name 2';

        photo.save();

        return 'photo created';
    }



}
