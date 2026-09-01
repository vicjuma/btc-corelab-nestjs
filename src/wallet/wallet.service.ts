import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { RpcService } from 'src/rpc/rpc.service';
import { CreateBumpFeeDto } from './dto/create-bumpfee.dto';
import { CreateWalletDescriptorDto } from './dto/create-wallet-descriptor.dto';
import { DeriveHdKeyDto } from './dto/derive-hd-key.dto';
import { GetBalanceDto } from './dto/get-balance.dto';
import { GetHdKeysDto } from './dto/get-hd-keys.dto';
import { GetNewAddressDto } from './dto/get-new-address.dto';
import { GetRawChangeAddressDto } from './dto/get-raw-change-address.dto';
import { GetReceivedByAddressDto } from './dto/get-received-by-address.dto';
import { GetReceivedByLabelDto } from './dto/get-received-by-label.dto';
import { GetTransactionDto } from './dto/get-transaction.dto';

@Injectable()
export class WalletService {
  constructor(private readonly rpcService: RpcService) {}

  async abandonTransaction(txid: string) {
    return this.rpcService.rpc('abandontransaction', `txid=${txid}`);
  }

  async abortRescan() {
    return this.rpcService.rpc('abortrescan');
  }

  async addHDkey(hdkey: string) {
    return this.rpcService.rpc('addhdkey', `hdkey=${hdkey}`);
  }

  async backupWallet(destination: string) {
    return this.rpcService.rpc('backupwallet', `destination=${destination}`);
  }

  async bumpFee(createBumpFeeDto: CreateBumpFeeDto) {
    const {
      txid,
      conf_target,
      fee_rate,
      replaceable,
      estimate_mode,
      outputs,
      original_change_index,
    } = createBumpFeeDto;

    const options: Record<string, unknown> = {
      ...(conf_target !== undefined && { conf_target }),
      ...(fee_rate !== undefined && { fee_rate }),
      ...(replaceable !== undefined && { replaceable }),
      ...(estimate_mode !== undefined && { estimate_mode }),
      ...(outputs !== undefined && { outputs }),
      ...(original_change_index !== undefined && { original_change_index }),
    };
    const args = [
      txid,
      ...(Object.keys(options).length > 0 ? [JSON.stringify(options)] : []),
    ];
    return this.rpcService.rpc('bumpfee', ...args);
  }

  async createWallet(createWalletDto: CreateWalletDto) {
    const {
      wallet_name,
      disable_private_keys,
      blank,
      // passphrase,
      avoid_reuse,
      descriptors,
      load_on_startup,
      external_signer,
    } = createWalletDto;
    return this.rpcService.rpc(
      'createwallet',
      `wallet_name=${wallet_name}`,
      `disable_private_keys=${disable_private_keys}`,
      `blank=${blank}`,
      // `passphrase=${passphrase}`,
      `avoid_reuse=${avoid_reuse}`,
      `descriptors=${descriptors}`,
      `load_on_startup=${load_on_startup}`,
      `external_signer=${external_signer}`,
    );
  }

  async createWalletDescriptor(
    createWalletDescriptorDto: CreateWalletDescriptorDto,
  ) {
    const { type, internal, hdkey } = createWalletDescriptorDto;

    const options: Record<string, unknown> = {
      ...(internal !== undefined && { internal }),
      ...(hdkey !== undefined && { hdkey }),
    };

    const args = [
      type,
      ...(Object.keys(options).length > 0 ? [JSON.stringify(options)] : []),
    ];

    return this.rpcService.rpc('createwalletdescriptor', ...args);
  }

  async deriveHdKey(deriveHdKeyDto: DeriveHdKeyDto) {
    const { path, private: isPrivate, hdkey } = deriveHdKeyDto;

    const options: Record<string, unknown> = {
      ...(isPrivate !== undefined && { private: isPrivate }),
      ...(hdkey !== undefined && { hdkey }),
    };

    const args = [
      path,
      ...(Object.keys(options).length > 0 ? [JSON.stringify(options)] : []),
    ];

    return this.rpcService.rpc('derivehdkey', ...args);
  }

  async encryptWallet(passphrase: string) {
    return this.rpcService.rpc('encryptwallet', `passphrase=${passphrase}`);
  }

  async exportWatchonlyWallet(destination: string) {
    return this.rpcService.rpc(
      'exportwatchonlywallet',
      `destination=${destination}`,
    );
  }

  async getAddressesByLabel(label: string) {
    return this.rpcService.rpc('getaddressesbylabel', `label=${label}`);
  }

  async getAddressInfo(address: string) {
    return this.rpcService.rpc('getaddressinfo', `address=${address}`);
  }

  async getBalance(getBalanceDto: GetBalanceDto) {
    const { minconf, avoid_reuse } = getBalanceDto;
    return this.rpcService.rpc(
      'getbalance',
      `minconf=${minconf}`,
      `avoid_reuse=${avoid_reuse}`,
    );
  }

  async getBalances() {
    return this.rpcService.rpc('getbalances');
  }

  async getHdKeys(getHdKeysDto?: GetHdKeysDto) {
    const options = {
      ...(getHdKeysDto?.active_only !== undefined && {
        active_only: getHdKeysDto.active_only,
      }),
      ...(getHdKeysDto?.private !== undefined && {
        private: getHdKeysDto.private,
      }),
    };

    return this.rpcService.rpc(
      'gethdkeys',
      ...(Object.keys(options).length > 0 ? [JSON.stringify(options)] : []),
    );
  }

  async getNewAddress(getNewAddressDto?: GetNewAddressDto) {
    const { label, address_type } = getNewAddressDto ?? {};

    const args = [
      ...(label !== undefined || address_type !== undefined
        ? [label ?? '']
        : []),
      ...(address_type !== undefined ? [address_type] : []),
    ];

    return this.rpcService.rpc('getnewaddress', ...args);
  }

  async getRawChangeAddress(getRawChangeAddressDto?: GetRawChangeAddressDto) {
    const { address_type } = getRawChangeAddressDto ?? {};

    const args = [...(address_type !== undefined ? [address_type] : [])];

    return this.rpcService.rpc('getrawchangeaddress', ...args);
  }

  async getReceivedByAddress(getReceivedByAddressDto: GetReceivedByAddressDto) {
    const { address, minconf, include_immature_coinbase } =
      getReceivedByAddressDto;

    const args = [
      address,
      ...(minconf !== undefined
        ? [String(minconf)]
        : include_immature_coinbase !== undefined
          ? ['1']
          : []),
      ...(include_immature_coinbase !== undefined
        ? [String(include_immature_coinbase)]
        : []),
    ];

    return this.rpcService.rpc('getreceivedbyaddress', ...args);
  }

  async getReceivedByLabel(getReceivedByLabelDto: GetReceivedByLabelDto) {
    const { label, minconf, include_immature_coinbase } = getReceivedByLabelDto;

    const args = [
      label,
      ...(minconf !== undefined
        ? [String(minconf)]
        : include_immature_coinbase !== undefined
          ? ['1']
          : []),
      ...(include_immature_coinbase !== undefined
        ? [String(include_immature_coinbase)]
        : []),
    ];

    return this.rpcService.rpc('getreceivedbylabel', ...args);
  }

  async getTransaction(getTransactionDto: GetTransactionDto) {
    const { txid, include_watchonly, verbose } = getTransactionDto;

    const args = [
      txid,
      ...(include_watchonly !== undefined
        ? [String(include_watchonly)]
        : verbose !== undefined
          ? ['false']
          : []),
      ...(verbose !== undefined ? [String(verbose)] : []),
    ];

    return this.rpcService.rpc('gettransaction', ...args);
  }

  async getWalletInfo() {
    return this.rpcService.rpc('getwalletinfo');
  }
}
