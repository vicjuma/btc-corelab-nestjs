import { Test, TestingModule } from '@nestjs/testing';
import { RawTransactionsService } from './raw-transactions.service';

describe('RawTransactionsService', () => {
  let service: RawTransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RawTransactionsService],
    }).compile();

    service = module.get<RawTransactionsService>(RawTransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
