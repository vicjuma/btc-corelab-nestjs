import { Module } from '@nestjs/common';
import { RawTransactionsService } from './raw-transactions.service';
import { RawTransactionsController } from './raw-transactions.controller';
import { RpcService } from 'src/rpc/rpc.service';

@Module({
  controllers: [RawTransactionsController],
  providers: [RawTransactionsService, RpcService],
})
export class RawTransactionsModule {}
