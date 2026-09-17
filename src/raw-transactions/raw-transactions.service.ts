import { Injectable } from '@nestjs/common';
import { RpcService } from 'src/rpc/rpc.service';
import { CreateRawTransactionDto } from './dto/create-raw-transaction.dto';
import { FundRawTransactionDto } from './dto/fund-raw-transaction.dto';
import { CreatePsbtDto } from './dto/create-psbt.dto';
import { UtxoUpdatePsbtDto } from './dto/utxo-update-psbt.dto';
import { DescriptorProcessPsbtDto } from './dto/descriptor-process-psbt.dto';

@Injectable()
export class RawTransactionsService {
  constructor(private readonly rpcService: RpcService) {}

  async createRawTransaction(createRawTransactionDto: CreateRawTransactionDto) {
    const { inputs, outputs, locktime, replaceable, version } =
      createRawTransactionDto;

    const hasOptionalArgs =
      locktime !== undefined ||
      replaceable !== undefined ||
      version !== undefined;

    const args = [
      JSON.stringify(inputs),
      JSON.stringify(outputs),

      ...(hasOptionalArgs ? [String(locktime ?? 0)] : []),

      ...(replaceable !== undefined || version !== undefined
        ? [String(replaceable ?? true)]
        : []),

      ...(version !== undefined ? [String(version)] : []),
    ];

    return this.rpcService.rpc('createrawtransaction', ...args);
  }

  async fundRawTransaction(fundRawTransactionDto: FundRawTransactionDto) {
    const { hexstring, options, iswitness } = fundRawTransactionDto;

    const args = [
      hexstring,
      ...(options !== undefined || iswitness !== undefined
        ? [JSON.stringify(options ?? {})]
        : []),
      ...(iswitness !== undefined ? [String(iswitness)] : []),
    ];

    return this.rpcService.rpc('fundrawtransaction', ...args);
  }

  async createPsbt(createPsbtDto: CreatePsbtDto) {
    const { inputs, outputs, locktime, replaceable, version, psbt_version } =
      createPsbtDto;

    const args = [
      JSON.stringify(inputs),
      JSON.stringify(outputs),
      ...(locktime !== undefined ||
      replaceable !== undefined ||
      version !== undefined ||
      psbt_version !== undefined
        ? [String(locktime ?? 0)]
        : []),
      ...(replaceable !== undefined ||
      version !== undefined ||
      psbt_version !== undefined
        ? [String(replaceable ?? true)]
        : []),
      ...(version !== undefined || psbt_version !== undefined
        ? [String(version ?? 2)]
        : []),
      ...(psbt_version !== undefined ? [String(psbt_version ?? 2)] : []),
    ];

    return this.rpcService.rpc('createpsbt', ...args);
  }

  async utxoUpdatePsbt(utxoUpdatePsbtDto: UtxoUpdatePsbtDto) {
    const { psbt, descriptors } = utxoUpdatePsbtDto;

    const args = [
      psbt,
      ...(descriptors !== undefined ? [JSON.stringify(descriptors)] : []),
    ];

    return this.rpcService.rpc('utxoupdatepsbt', ...args);
  }

  async descriptorProcessPsbt(
    descriptorProcessPsbtDto: DescriptorProcessPsbtDto,
  ) {
    const { psbt, descriptors, sighashtype, bip32derivs, finalize } =
      descriptorProcessPsbtDto;

    const hasOptionalArgs =
      sighashtype !== undefined ||
      bip32derivs !== undefined ||
      finalize !== undefined;

    const args = [
      psbt,
      JSON.stringify(descriptors),

      ...(hasOptionalArgs ? [sighashtype ?? 'DEFAULT'] : []),

      ...(bip32derivs !== undefined || finalize !== undefined
        ? [String(bip32derivs ?? true)]
        : []),

      ...(finalize !== undefined ? [String(finalize)] : []),
    ];

    return this.rpcService.rpc('descriptorprocesspsbt', ...args);
  }
}
