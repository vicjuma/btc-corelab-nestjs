import { Body, Controller, Get, Post } from '@nestjs/common';
import { RawTransactionsService } from './raw-transactions.service';
import { CreateRawTransactionDto } from './dto/create-raw-transaction.dto';
import { FundRawTransactionDto } from './dto/fund-raw-transaction.dto';
import { CreatePsbtDto } from './dto/create-psbt.dto';
import { UtxoUpdatePsbtDto } from './dto/utxo-update-psbt.dto';
import { DescriptorProcessPsbtDto } from './dto/descriptor-process-psbt.dto';
import { AnalyzePsbtDto } from './dto/analyze-psbt.dto';
import { TestMempoolAcceptDto } from './dto/test-mempool-accept.dto';
import { SignRawTransactionWithKeyDto } from './dto/sign-raw-transaction-with-key.dto';

@Controller('raw-transactions')
export class RawTransactionsController {
  constructor(
    private readonly rawTransactionsService: RawTransactionsService,
  ) {}

  @Post('createrawtransaction')
  createRawTransaction(
    @Body() createRawTransactionDto: CreateRawTransactionDto,
  ) {
    return this.rawTransactionsService.createRawTransaction(
      createRawTransactionDto,
    );
  }

  @Get('enumeratesigners')
  enumerateSigners() {
    return this.rawTransactionsService.enumerateSigners();
  }

  @Post('fundrawtransaction')
  fundRawTransaction(@Body() fundRawTransactionDto: FundRawTransactionDto) {
    return this.rawTransactionsService.fundRawTransaction(
      fundRawTransactionDto,
    );
  }

  @Post('createpsbt')
  createPsbt(@Body() createPsbtDto: CreatePsbtDto) {
    return this.rawTransactionsService.createPsbt(createPsbtDto);
  }

  @Post('utxoupdatepsbt')
  utxoUpdatePsbt(@Body() utxoUpdatePsbtDto: UtxoUpdatePsbtDto) {
    return this.rawTransactionsService.utxoUpdatePsbt(utxoUpdatePsbtDto);
  }

  @Post('descriptorprocesspsbt')
  descriptorProcessPsbt(
    @Body() descriptorProcessPsbtDto: DescriptorProcessPsbtDto,
  ) {
    return this.rawTransactionsService.descriptorProcessPsbt(
      descriptorProcessPsbtDto,
    );
  }

  @Post('analyzepsbt')
  analyzePsbt(@Body() analyzePsbtDto: AnalyzePsbtDto) {
    return this.rawTransactionsService.analyzePsbt(analyzePsbtDto);
  }

  @Post('signrawtransactionwithkey')
  signRawTransactionWithKey(
    @Body() signRawTransactionWithKeyDto: SignRawTransactionWithKeyDto,
  ) {
    return this.rawTransactionsService.signRawTransactionWithKey(
      signRawTransactionWithKeyDto,
    );
  }

  @Post('testmempoolaccept')
  testMempoolAccept(@Body() testMempoolAcceptDto: TestMempoolAcceptDto) {
    return this.rawTransactionsService.testMempoolAccept(testMempoolAcceptDto);
  }
}
