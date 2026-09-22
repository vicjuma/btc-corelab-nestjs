import { Injectable } from '@nestjs/common';
import { RpcService } from 'src/rpc/rpc.service';
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

@Injectable()
export class RawTransactionsService {
  constructor(private readonly rpcService: RpcService) {}

  async combinePsbt(combinePsbtDto: CombinePsbtDto) {
    const { txs } = combinePsbtDto;

    return this.rpcService.rpc('combinepsbt', JSON.stringify(txs));
  }

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

  async enumerateSigners() {
    return this.rpcService.rpc('enumeratesigners');
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

  async finalizePsbt(finalizePsbtDto: FinalizePsbtDto) {
    const { psbt, extract } = finalizePsbtDto;

    const args = [psbt, ...(extract !== undefined ? [String(extract)] : [])];

    return this.rpcService.rpc('finalizepsbt', ...args);
  }

  async joinPsbts(joinPsbtsDto: JoinPsbtsDto) {
    const { txs } = joinPsbtsDto;

    return this.rpcService.rpc('joinpsbts', JSON.stringify(txs));
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

  async analyzePsbt(analyzePsbtDto: AnalyzePsbtDto) {
    const { psbt } = analyzePsbtDto;

    return this.rpcService.rpc('analyzepsbt', psbt);
  }

  async signRawTransactionWithKey(
    signRawTransactionWithKeyDto: SignRawTransactionWithKeyDto,
  ) {
    const { hexstring, privkeys, prevtxs, sighashtype } =
      signRawTransactionWithKeyDto;

    const args = [
      hexstring,
      JSON.stringify(privkeys),

      ...(prevtxs !== undefined || sighashtype !== undefined
        ? [JSON.stringify(prevtxs ?? [])]
        : []),

      ...(sighashtype !== undefined ? [sighashtype] : []),
    ];

    return this.rpcService.rpc('signrawtransactionwithkey', ...args);
  }

  async testMempoolAccept(testMempoolAcceptDto: TestMempoolAcceptDto) {
    const { rawtxs, maxfeerate } = testMempoolAcceptDto;

    const args = [
      JSON.stringify(rawtxs),

      ...(maxfeerate !== undefined ? [String(maxfeerate)] : []),
    ];

    return this.rpcService.rpc('testmempoolaccept', ...args);
  }
}
