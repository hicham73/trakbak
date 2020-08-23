import { Test, TestingModule } from '@nestjs/testing';
import { EnchereResolver } from './enchere.resolver';

describe('EnchereResolver', () => {
  let resolver: EnchereResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnchereResolver],
    }).compile();

    resolver = module.get<EnchereResolver>(EnchereResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
