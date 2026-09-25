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
import { CombinePsbtDto } from './dto/combine-psbt.dto';
import { JoinPsbtsDto } from './dto/join-psbts.dto';
import { FinalizePsbtDto } from './dto/finalize-psbt.dto';
import { SendRawTransactionDto } from './dto/send-raw-transaction.dto';
import { SubmitPackageDto } from './dto/submit-package.dto';
import { GetRawTransactionDto } from './dto/get-raw-transaction.dto';
import { BumpFeeDto } from './dto/bump-fee.dto';
import { PsbtBumpFeeDto } from './dto/psbt-bump-fee.dto';

@Controller('raw-transactions')
export class RawTransactionsController {
  constructor(
    private readonly rawTransactionsService: RawTransactionsService,
  ) {}

  @Post('bumpfee')
  bumpFee(@Body() bumpFeeDto: BumpFeeDto) {
    return this.rawTransactionsService.bumpFee(bumpFeeDto);
  }

  @Post('combinepsbt')
  combinePsbt(@Body() combinePsbtDto: CombinePsbtDto) {
    return this.rawTransactionsService.combinePsbt(combinePsbtDto);
  }

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

  @Post('finalizepsbt')
  finalizePsbt(@Body() finalizePsbtDto: FinalizePsbtDto) {
    return this.rawTransactionsService.finalizePsbt(finalizePsbtDto);
  }

  @Post('getrawtransaction')
  getRawTransaction(@Body() getRawTransactionDto: GetRawTransactionDto) {
    return this.rawTransactionsService.getRawTransaction(getRawTransactionDto);
  }

  @Post('joinpsbts')
  joinPsbts(@Body() joinPsbtsDto: JoinPsbtsDto) {
    return this.rawTransactionsService.joinPsbts(joinPsbtsDto);
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

  @Post('psbtbumpfee')
  psbtBumpFee(@Body() psbtBumpFeeDto: PsbtBumpFeeDto) {
    return this.rawTransactionsService.psbtBumpFee(psbtBumpFeeDto);
  }

  @Post('sendrawtransaction')
  sendRawTransaction(@Body() sendRawTransactionDto: SendRawTransactionDto) {
    return this.rawTransactionsService.sendRawTransaction(
      sendRawTransactionDto,
    );
  }

  @Post('signrawtransactionwithkey')
  signRawTransactionWithKey(
    @Body() signRawTransactionWithKeyDto: SignRawTransactionWithKeyDto,
  ) {
    return this.rawTransactionsService.signRawTransactionWithKey(
      signRawTransactionWithKeyDto,
    );
  }

  @Post('submitpackage')
  submitPackage(@Body() submitPackageDto: SubmitPackageDto) {
    return this.rawTransactionsService.submitPackage(submitPackageDto);
  }

  @Post('testmempoolaccept')
  testMempoolAccept(@Body() testMempoolAcceptDto: TestMempoolAcceptDto) {
    return this.rawTransactionsService.testMempoolAccept(testMempoolAcceptDto);
  }
}
