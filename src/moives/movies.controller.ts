import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { query } from 'express';
import { retry } from 'rxjs';
import { Movie } from './entities/movie.entity';
import { MoivesService } from './moives.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService:MoivesService){}

    @Get()
    getAll() : Movie[]{
        return this.moviesService.getAll();
    }
    @Get("search")
    search(@Query("year") searchingYear:string):string{
        return `We are searching for a movie with a title after ${searchingYear}`;
    }
    @Get(":id")
    getOne(@Param('id') movieId:number):Movie{
        return this.moviesService.getOne(movieId);
    }
    @Post()
    create(@Body() movieData:CreateMovieDto){
        return this.moviesService.create(movieData);
    }
    @Delete(":id")
    remove(@Param('id') movieId:number){
        this.moviesService.deleteOne(movieId);
    }
    @Patch(":id")
    patchMovie(@Param('id') movieId:number,@Body() updateData:UpdateMovieDto){
        return this.moviesService.update(movieId,updateData);
    }


}
