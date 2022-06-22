import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() : string{
        return "This will Send you movie chart"
    }
    @Get("/:id")
    getOne(@Param('id') movieId:string):string{
        return `This will return you One movie that have same ${movieId}`;
    }

}
