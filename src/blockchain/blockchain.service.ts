import { Injectable } from '@nestjs/common';
import { RpcService } from 'src/rpc/rpc.service';
import { GetTxOutDto } from './dto/get-tx-out.dto';
import { GetTxSpendingPrevoutDto } from './dto/get-tx-spending-prevout.dto';
import { GetRawMempoolDto } from './dto/get-raw-mempool.dto';
import { GetMempoolEntryDto } from './dto/get-mempool-entry.dto';
import { GetMempoolAncestorsDto } from './dto/get-mempool-ancestors.dto';
import { GetMempoolDescendantsDto } from './dto/get-mempool-descendants.dto';
import { GetBlockDto } from './dto/get-block.dto';
import { GetBlockHeaderDto } from './dto/get-block-header.dto';
import { WaitForNewBlockDto } from './dto/wait-for-new-block.dto';
import { WaitForBlockDto } from './dto/wait-for-block.dto';
import { WaitForBlockHeightDto } from './dto/wait-for-block-height.dto';

/**
 * These servce functions are helping is to internally user them with these abstractions
 * Node.health()
 * Node.syncStatus()
 * Node.networkStatus()
 */
@Injectable()
export class BlockchainService {
  constructor(private readonly rpcService: RpcService) {}
  async getBlock(getBlockDto: GetBlockDto) {
    const { blockhash, verbosity } = getBlockDto;

    const args = [
      blockhash,
      ...(verbosity !== undefined ? [String(verbosity)] : []),
    ];

    return this.rpcService.rpc('getblock', ...args);
  }

  async getBlockHeader(getBlockHeaderDto: GetBlockHeaderDto) {
    const { blockhash, verbose } = getBlockHeaderDto;

    const args = [
      blockhash,
      ...(verbose !== undefined ? [String(verbose)] : []),
    ];

    return this.rpcService.rpc('getblockheader', ...args);
  }

  getNetworkInfo() {
    return this.rpcService.rpc('getnetworkinfo');
  }

  getBlockchainInfo() {
    return this.rpcService.rpc('getblockchaininfo');
  }

  async getBestBlockHash() {
    const bestBlockHash = await this.rpcService.rpc('getbestblockhash');
    const returnedJson = { data: bestBlockHash };
    return returnedJson;
  }

  async getBlockCount() {
    const blockCount = await this.rpcService.rpc('getblockcount');
    const returnedJson = { data: blockCount };
    return returnedJson;
  }

  async getConnectionCount() {
    const connectionCount = await this.rpcService.rpc('getconnectioncount');
    const returnedJson = { data: connectionCount };
    return returnedJson;
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

  async getMempoolAncestors(getMempoolAncestorsDto: GetMempoolAncestorsDto) {
    const { txid, verbose } = getMempoolAncestorsDto;

    const args = [txid, ...(verbose !== undefined ? [String(verbose)] : [])];

    return this.rpcService.rpc('getmempoolancestors', ...args);
  }

  async getMempoolCluster(txid: string) {
    return this.rpcService.rpc('getmempoolcluster', txid);
  }

  async getMempoolDescendants(
    getMempoolDescendantsDto: GetMempoolDescendantsDto,
  ) {
    const { txid, verbose } = getMempoolDescendantsDto;

    const args = [txid, ...(verbose !== undefined ? [String(verbose)] : [])];

    return this.rpcService.rpc('getmempooldescendants', ...args);
  }

  async getMempoolInfo() {
    return this.rpcService.rpc('getmempoolinfo');
  }

  async getMempoolEntry(getMempoolEntryDto: GetMempoolEntryDto) {
    const { txid } = getMempoolEntryDto;

    return this.rpcService.rpc('getmempoolentry', txid);
  }

  async waitForNewBlock(waitForNewBlockDto: WaitForNewBlockDto) {
    const { timeout, current_tip } = waitForNewBlockDto;

    const args = [
      ...(timeout !== undefined || current_tip !== undefined
        ? [String(timeout ?? 0)]
        : []),

      ...(current_tip !== undefined ? [current_tip] : []),
    ];

    return this.rpcService.rpc('waitfornewblock', ...args);
  }

  async waitForBlock(waitForBlockDto: WaitForBlockDto) {
    const { blockhash, timeout } = waitForBlockDto;

    const args = [
      blockhash,
      ...(timeout !== undefined ? [String(timeout)] : []),
    ];

    return this.rpcService.rpc('waitforblock', ...args);
  }

  async waitForBlockHeight(waitForBlockHeightDto: WaitForBlockHeightDto) {
    const { height, timeout } = waitForBlockHeightDto;

    const args = [
      String(height),
      ...(timeout !== undefined ? [String(timeout)] : []),
    ];

    return this.rpcService.rpc('waitforblockheight', ...args);
  }
}
