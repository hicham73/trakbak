import { Controller, Get, Post, Body } from '@nestjs/common';
import { Trak } from './trak.entity'

@Controller('trak')
export class TrakController {

    @Get('get')
    get() {
        return [
            {name: 'aaaa', year: 2001},
            {name: 'aaaa', year: 2001},
            {name: 'aaaa', year: 2001},
        ]
    }

    @Post('update')
    update(@Body() entity: Trak): any {
        return entity;

    }

    @Post('create')
    async create(@Body() entity: Trak): Promise<Trak> {

        let trak = new Trak();

        Object.keys(entity).forEach((key) => {
            trak[key] = entity[key]
        });
        // trak.id = 2;
        // trak.name = 'photo 2';
        // trak.description = 'file name 2';

        trak.save();

        return trak;
    }



}
