import { Module } from '@nestjs/common';
import { MoviesController } from './moives/movies.controller';
import { MoivesService } from './moives/moives.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoivesService],
})
export class AppModule {}
