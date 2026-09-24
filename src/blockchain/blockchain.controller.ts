import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { GetTxOutDto } from './dto/get-tx-out.dto';
import { GetTxSpendingPrevoutDto } from './dto/get-tx-spending-prevout.dto';
import { GetRawMempoolDto } from './dto/get-raw-mempool.dto';
import { GetMempoolEntryDto } from './dto/get-mempool-entry.dto';
import { GetMempoolAncestorsDto } from './dto/get-mempool-ancestors.dto';
import { GetMempoolDescendantsDto } from './dto/get-mempool-descendants.dto';

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

  @Post('gettxout')
  getTxOut(@Body() getTxOutDto: GetTxOutDto) {
    return this.blockchainService.getTxOut(getTxOutDto);
  }

  @Post('gettxspendingprevout')
  getTxSpendingPrevout(
    @Body() getTxSpendingPrevoutDto: GetTxSpendingPrevoutDto,
  ) {
    return this.blockchainService.getTxSpendingPrevout(getTxSpendingPrevoutDto);
  }

  @Post('getrawmempool')
  getRawMempool(@Body() getRawMempoolDto?: GetRawMempoolDto) {
    return this.blockchainService.getRawMempool(getRawMempoolDto);
  }

  @Post('getmempoolancestors')
  getMempoolAncestors(@Body() getMempoolAncestorsDto: GetMempoolAncestorsDto) {
    return this.blockchainService.getMempoolAncestors(getMempoolAncestorsDto);
  }

  @Post('getmempoolcluster')
  getMempoolCluster(@Body('txid') txid: string) {
    return this.blockchainService.getMempoolCluster(txid);
  }

  @Post('getmempooldescendants')
  getMempoolDescendants(
    @Body() getMempoolDescendantsDto: GetMempoolDescendantsDto,
  ) {
    return this.blockchainService.getMempoolDescendants(
      getMempoolDescendantsDto,
    );
  }

  @Get('getmempoolinfo')
  getMempoolInfo() {
    return this.blockchainService.getMempoolInfo();
  }

  @Post('getmempoolentry')
  getMempoolEntry(@Body() getMempoolEntryDto: GetMempoolEntryDto) {
    return this.blockchainService.getMempoolEntry(getMempoolEntryDto);
  }
}
