import { Test, TestingModule } from '@nestjs/testing';
import { SoporteController } from './soporte.controller';
import { SoporteService } from './soporte.service';

describe('SoporteController', () => {
  let controller: SoporteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoporteController],
      providers: [SoporteService],
    }).compile();

    controller = module.get<SoporteController>(SoporteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
