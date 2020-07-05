import { Test, TestingModule } from '@nestjs/testing';
import { TrakController } from './trak.controller';

describe('Trak Controller', () => {
  let controller: TrakController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrakController],
    }).compile();

    controller = module.get<TrakController>(TrakController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
