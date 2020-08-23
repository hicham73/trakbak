import { Test, TestingModule } from '@nestjs/testing';
import { ExpediteurService } from './expediteur.service';

describe('ExpediteurService', () => {
  let service: ExpediteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpediteurService],
    }).compile();

    service = module.get<ExpediteurService>(ExpediteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
