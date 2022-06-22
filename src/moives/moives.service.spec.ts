import { NotFoundException } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Test, TestingModule } from '@nestjs/testing';
import { MoivesService } from './moives.service';

describe('MoivesService', () => {
  let service: MoivesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoivesService],
    }).compile();

    service = module.get<MoivesService>(MoivesService);
  });

  it('should be defined', () => { 
    expect(service).toBeDefined();
  });

  it("should be 4",()=>{ // Individual test
    expect(2+2).toEqual(4);
  });

  describe("getAll",()=>{
    it('should return an array',()=>{
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    })
  });


  describe("getOne",()=>{
    it('should return a movie',()=>{
      service.create({
        title:'Test Movie',
        genres:["test"],
        year:2022
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
    it('should trow 404 error',()=>{
      try{
        service.getOne(999);
      }
      catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Movie id not Found 999`);
      }
    });
  })
  
  describe("deleteOne",()=>{
    it("deletes a movie",()=>{
      service.create({
        title:'Test Movie',
        genres:["test"],
        year:2022
      });
      const allMovies = service.getAll().length;
      service.deleteOne(1)
      const afterMovies = service.getAll().length;
      expect(afterMovies).toBeLessThan(allMovies);
    });
    it("should return a 404",()=>{
      try{
        service.deleteOne(999);
      }
      catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Movie id not Found 999`);
      }
    });
  });
  describe("create",()=>{
    it("should create a movie",()=>{
      const beforeCreate = service.getAll.length;
      service.create({
        title:'Test Movie',
        genres:["test"],
        year:2022
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe("update",()=>{

    it('should be update neatly',()=>{
      service.create({
        title:'Test Movie',
        genres:["test"],
        year:2022
      });
      service.update(1,{
        title:'update test Movie',
      });
  
      const afterTitle = service.getOne(1).title;
      expect(afterTitle).toEqual("update test Movie");  
    });
    it('should return a 404',()=>{
      try{
        service.update(999,{})
      }
      catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    })
  });
});
