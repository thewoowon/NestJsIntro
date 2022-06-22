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
});
