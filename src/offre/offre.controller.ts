import { Controller, Get } from '@nestjs/common';
import { PhotoService } from '../photo/photo.service'
import {getConnection} from "typeorm";
import {getManager} from "typeorm";
import {Photo} from "../entity/photo.entity"


@Controller('offre')
export class OffreController {
    @Get()
    findAll(): string {


        const em = getManager();
        em.findOne(Photo,1).then(function (photo) {
            photo.name = 'aaaaaaaaa';
            photo.filename = 'new file name';
            em.save(photo);
        });

        // const user = getManager()
        // .createQueryBuilder("Photo", "photo")
        // .where("photo.id = :id", { id: 1 })
        // .getOne();



        return "response from controller offre: "
    }



}
