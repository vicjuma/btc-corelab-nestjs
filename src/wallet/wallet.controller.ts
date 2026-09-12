import { Controller, Get, Post, Body } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
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
import { ListReceivedByAddressDto } from './dto/list-received-by-address.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('abandontransaction')
  abandonTransaction(@Body() txid: string) {
    return this.walletService.abandonTransaction(txid);
  }

  @Get('abortrescan')
  abortRescan() {
    return this.walletService.abortRescan();
  }

  @Post('addhdkey')
  addHDkey(@Body() hdkey: string) {
    return this.walletService.addHDkey(hdkey);
  }

  @Post('bumpfee')
  bumpFee(@Body() createBumpFeeDto: CreateBumpFeeDto) {
    return this.walletService.bumpFee(createBumpFeeDto);
  }

  @Post('create')
  create(@Body() createWalletDto: CreateWalletDto) {
    return this.walletService.createWallet(createWalletDto);
  }

  @Post('createwalletdescriptor')
  createWalletDescriptor(
    @Body() createWalletDescriptorDto: CreateWalletDescriptorDto,
  ) {
    return this.walletService.createWalletDescriptor(createWalletDescriptorDto);
  }

  @Post('derivehdkey')
  deriveHdKey(@Body() deriveHdKeyDto: DeriveHdKeyDto) {
    return this.walletService.deriveHdKey(deriveHdKeyDto);
  }

  @Post('encrypt')
  encrypt(@Body() passphrase: string) {
    return this.walletService.encryptWallet(passphrase);
  }

  @Post('exportwatchonlywallet')
  exportWatchonlyWallet(@Body() destination: string) {
    return this.walletService.exportWatchonlyWallet(destination);
  }

  @Post('getaddressesbylabel')
  getAddressesByLabel(@Body() label: string) {
    return this.walletService.getAddressesByLabel(label);
  }

  @Post('getaddressinfo')
  getAddressInfo(@Body() address: string) {
    return this.walletService.getAddressInfo(address);
  }

  @Post('getbalance')
  getBalance(@Body() getBalanceDto: GetBalanceDto) {
    return this.walletService.getBalance(getBalanceDto);
  }

  @Get('getbalances')
  getBalances() {
    return this.walletService.getBalances();
  }

  @Post('gethdkeys')
  getHdKeys(@Body() getHdKeysDto?: GetHdKeysDto) {
    return this.walletService.getHdKeys(getHdKeysDto);
  }

  @Post('getnewaddress')
  getNewAddress(@Body() getNewAddressDto?: GetNewAddressDto) {
    return this.walletService.getNewAddress(getNewAddressDto);
  }

  @Post('getrawchangeaddress')
  getRawChangeAddress(@Body() getRawChangeAddressDto?: GetRawChangeAddressDto) {
    return this.walletService.getRawChangeAddress(getRawChangeAddressDto);
  }

  @Post('getreceivedbyaddress')
  getReceivedByAddress(
    @Body() getReceivedByAddressDto: GetReceivedByAddressDto,
  ) {
    return this.walletService.getReceivedByAddress(getReceivedByAddressDto);
  }

  @Post('getreceivedbylabel')
  getReceivedByLabel(@Body() getReceivedByLabelDto: GetReceivedByLabelDto) {
    return this.walletService.getReceivedByLabel(getReceivedByLabelDto);
  }

  @Post('gettransaction')
  getTransaction(@Body() getTransactionDto: GetTransactionDto) {
    return this.walletService.getTransaction(getTransactionDto);
  }

  @Get('getwalletinfo')
  getWalletInfo() {
    return this.walletService.getWalletInfo();
  }

  @Get('listdescriptors')
  listDescriptors() {
    return this.walletService.listDescriptors();
  }

  @Get('listreceivedbyaddress')
  listReceivedByaddress(
    @Body() listReceivedByAddressDto: ListReceivedByAddressDto,
  ) {
    return this.walletService.listReceivedByaddress(listReceivedByAddressDto);
  }

  @Get('listreceivedbylabel')
  listReceivedByLabel(
    @Body() listReceivedByAddressDto: ListReceivedByAddressDto,
  ) {
    return this.walletService.listReceivedByLabel(listReceivedByAddressDto);
  }

  @Get('listwallets')
  listWallets() {
    return this.walletService.listWallets();
  }

  @Get('listwalletdir')
  listWalletdir() {
    return this.walletService.listWalletdir();
  }
}
