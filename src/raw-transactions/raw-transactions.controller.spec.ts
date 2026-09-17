import { Test, TestingModule } from '@nestjs/testing';
import { RawTransactionsController } from './raw-transactions.controller';
import { RawTransactionsService } from './raw-transactions.service';

describe('RawTransactionsController', () => {
  let controller: RawTransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RawTransactionsController],
      providers: [RawTransactionsService],
    }).compile();

    controller = module.get<RawTransactionsController>(RawTransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
