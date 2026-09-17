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

export class FundRawTransactionInputWeightDto {
  @IsString()
  @IsNotEmpty()
  txid!: string;

  @IsNumber()
  @IsNotEmpty()
  vout!: number;

  @IsNumber()
  @IsNotEmpty()
  weight!: number;
}

export class FundRawTransactionSolvingDataDto {
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

export class FundRawTransactionOptionsDto {
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
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FundRawTransactionInputWeightDto)
  input_weights?: FundRawTransactionInputWeightDto[];

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
  @Type(() => FundRawTransactionSolvingDataDto)
  solving_data?: FundRawTransactionSolvingDataDto;
}

export class FundRawTransactionDto {
  @IsString()
  @IsNotEmpty()
  hexstring!: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => FundRawTransactionOptionsDto)
  options?: FundRawTransactionOptionsDto;

  @IsOptional()
  @IsBoolean()
  iswitness?: boolean;
}
