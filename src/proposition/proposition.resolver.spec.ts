import { Test, TestingModule } from '@nestjs/testing';
import { PropositionResolver } from './proposition.resolver';

describe('PropositionResolver', () => {
  let resolver: PropositionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropositionResolver],
    }).compile();

    resolver = module.get<PropositionResolver>(PropositionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
