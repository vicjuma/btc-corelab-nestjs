import { Controller, Get } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';

@Controller('blockchain')
export class BlockchainController {
  constructor(private readonly blockchainService: BlockchainService) {}

  @Get('getnetworkinfo')
  getNetworkInfo() {
    return this.blockchainService.getNetworkInfo();
  }

  @Get('getblockchaininfo')
  getBlockchainInfo() {
    return this.blockchainService.getBlockchainInfo();
  }

  @Get('getbestblockhash')
  getBestBlockHash() {
    return this.blockchainService.getBestBlockHash();
  }

  @Get('getblockcount')
  getBlockCount() {
    return this.blockchainService.getBlockCount();
  }

  @Get('getconnectioncount')
  getConnectionCount() {
    return this.blockchainService.getConnectionCount();
  }
}
