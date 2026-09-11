import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class WalletCreateFundedPsbtInputDto {
  @IsString()
  @IsNotEmpty()
  txid: string = '';

  @IsNumber()
  vout: number = 0;

  @IsOptional()
  @IsNumber()
  sequence?: number;

  @IsOptional()
  @IsNumber()
  weight?: number;
}

export class WalletCreateFundedPsbtOutputDto {
  [key: string]: string | number;
}

export class WalletCreateFundedPsbtSolvingDataDto {
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  pubkeys?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  scripts?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  descriptors?: string[];
}

export class WalletCreateFundedPsbtOptionsDto {
  @IsOptional()
  @IsBoolean()
  add_inputs?: boolean;

  @IsOptional()
  @IsBoolean()
  include_unsafe?: boolean;

  @IsOptional()
  @IsNumber()
  minconf?: number;

  @IsOptional()
  @IsNumber()
  maxconf?: number;

  @IsOptional()
  @IsString()
  changeAddress?: string;

  @IsOptional()
  @IsNumber()
  changePosition?: number;

  @IsOptional()
  @IsString()
  @IsIn(['legacy', 'p2sh-segwit', 'bech32', 'bech32m'])
  change_type?: string;

  @IsOptional()
  @IsBoolean()
  includeWatching?: boolean;

  @IsOptional()
  @IsBoolean()
  lockUnspents?: boolean;

  @IsOptional()
  fee_rate?: number | string;

  @IsOptional()
  feeRate?: number | string;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  subtractFeeFromOutputs?: number[];

  @IsOptional()
  @IsNumber()
  max_tx_weight?: number;

  @IsOptional()
  @IsNumber()
  conf_target?: number;

  @IsOptional()
  @IsString()
  @IsIn(['unset', 'economical', 'conservative'])
  estimate_mode?: string;

  @IsOptional()
  @IsBoolean()
  replaceable?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => WalletCreateFundedPsbtSolvingDataDto)
  solving_data?: WalletCreateFundedPsbtSolvingDataDto;
}

export class WalletCreateFundedPsbtDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WalletCreateFundedPsbtInputDto)
  inputs?: WalletCreateFundedPsbtInputDto[];

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => WalletCreateFundedPsbtOutputDto)
  outputs: WalletCreateFundedPsbtOutputDto[] = [];

  @IsOptional()
  @IsNumber()
  locktime?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => WalletCreateFundedPsbtOptionsDto)
  options?: WalletCreateFundedPsbtOptionsDto;

  @IsOptional()
  @IsBoolean()
  bip32derivs?: boolean;

  @IsOptional()
  @IsNumber()
  version?: number;

  @IsOptional()
  @IsNumber()
  psbt_version?: number;
}
