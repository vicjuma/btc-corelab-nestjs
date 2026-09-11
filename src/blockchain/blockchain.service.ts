import { Injectable } from '@nestjs/common';
import { RpcService } from 'src/rpc/rpc.service';

/**
 * These servce functions are helping is to internally user them with these abstractions
 * Node.health()
 * Node.syncStatus()
 * Node.networkStatus()
 */
@Injectable()
export class BlockchainService {
  constructor(private readonly rpcService: RpcService) {}

  getNetworkInfo() {
    return this.rpcService.rpc('getnetworkinfo');
  }

  getBlockchainInfo() {
    return this.rpcService.rpc('getblockchaininfo');
  }

  getBestBlockHash() {
    return this.rpcService.rpc('getbestblockhash');
  }

  getBlockCount() {
    return this.rpcService.rpc('getblockcount');
  }

  getConnectionCount() {
    return this.rpcService.rpc('getconnectioncount');
  }
}
