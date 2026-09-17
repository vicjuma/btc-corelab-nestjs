import { Injectable } from '@nestjs/common';
import { RpcService } from 'src/rpc/rpc.service';
import { GetTxOutDto } from './dto/get-tx-out.dto';
import { GetTxSpendingPrevoutDto } from './dto/get-tx-spending-prevout.dto';
import { GetRawMempoolDto } from './dto/get-raw-mempool.dto';

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

  async getTxOut(getTxOutDto: GetTxOutDto) {
    const { txid, n, include_mempool } = getTxOutDto;

    const args = [
      txid,
      String(n),
      ...(include_mempool !== undefined ? [String(include_mempool)] : []),
    ];

    return this.rpcService.rpc('gettxout', ...args);
  }

  async getTxSpendingPrevout(getTxSpendingPrevoutDto: GetTxSpendingPrevoutDto) {
    const { outputs, options } = getTxSpendingPrevoutDto;

    const args = [
      JSON.stringify(outputs),
      ...(options !== undefined ? [JSON.stringify(options)] : []),
    ];

    return this.rpcService.rpc('gettxspendingprevout', ...args);
  }

  async getRawMempool(getRawMempoolDto?: GetRawMempoolDto) {
    const { verbose, mempool_sequence } = getRawMempoolDto ?? {};

    const args = [
      ...(verbose !== undefined || mempool_sequence !== undefined
        ? [String(verbose ?? false)]
        : []),
      ...(mempool_sequence !== undefined ? [String(mempool_sequence)] : []),
    ];

    return this.rpcService.rpc('getrawmempool', ...args);
  }

  async getMempoolInfo() {
    return this.rpcService.rpc('getmempoolinfo');
  }
}
