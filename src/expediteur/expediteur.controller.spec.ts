import { Test, TestingModule } from '@nestjs/testing';
import { ExpediteurController } from './expediteur.controller';

describe('Expediteur Controller', () => {
  let controller: ExpediteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpediteurController],
    }).compile();

    controller = module.get<ExpediteurController>(ExpediteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
