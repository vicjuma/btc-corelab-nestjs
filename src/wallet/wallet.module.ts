import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { RpcService } from 'src/rpc/rpc.service';

@Module({
  controllers: [WalletController],
  providers: [WalletService, RpcService],
})
export class WalletModule {}
