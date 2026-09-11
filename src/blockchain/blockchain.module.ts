import { Module } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { BlockchainController } from './blockchain.controller';
import { RpcService } from 'src/rpc/rpc.service';

@Module({
  controllers: [BlockchainController],
  providers: [BlockchainService, RpcService],
})
export class BlockchainModule {}
