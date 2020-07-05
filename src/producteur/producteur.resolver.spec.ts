import { Test, TestingModule } from '@nestjs/testing';
import { ProducteurResolver } from './producteur.resolver';

describe('ProducteurResolver', () => {
  let resolver: ProducteurResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducteurResolver],
    }).compile();

    resolver = module.get<ProducteurResolver>(ProducteurResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
