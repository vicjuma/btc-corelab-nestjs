import { Body, Controller, Post } from '@nestjs/common';
import { RawTransactionsService } from './raw-transactions.service';
import { CreateRawTransactionDto } from './dto/create-raw-transaction.dto';
import { FundRawTransactionDto } from './dto/fund-raw-transaction.dto';
import { CreatePsbtDto } from './dto/create-psbt.dto';
import { UtxoUpdatePsbtDto } from './dto/utxo-update-psbt.dto';
import { DescriptorProcessPsbtDto } from './dto/descriptor-process-psbt.dto';

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
}
