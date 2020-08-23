import { Test, TestingModule } from '@nestjs/testing';
import { EnchereService } from './enchere.service';

describe('EnchereService', () => {
  let service: EnchereService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnchereService],
    }).compile();

    service = module.get<EnchereService>(EnchereService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
