import { Test, TestingModule } from '@nestjs/testing';
import { ExpediteurResolver } from './expediteur.resolver';

describe('ExpediteurResolver', () => {
  let resolver: ExpediteurResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpediteurResolver],
    }).compile();

    resolver = module.get<ExpediteurResolver>(ExpediteurResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
