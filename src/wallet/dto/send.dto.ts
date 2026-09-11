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

export class SendOutputDto {
  [key: string]: string | number;
}

export class SendInputDto {
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

export class SendSolvingDataDto {
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

export class SendOptionsDto {
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
  @IsBoolean()
  add_to_wallet?: boolean;

  @IsOptional()
  @IsString()
  change_address?: string;

  @IsOptional()
  @IsNumber()
  change_position?: number;

  @IsOptional()
  @IsString()
  @IsIn(['legacy', 'p2sh-segwit', 'bech32', 'bech32m'])
  change_type?: string;

  @IsOptional()
  @IsNumber()
  fee_rate?: number | string;

  @IsOptional()
  @IsBoolean()
  include_watching?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SendInputDto)
  inputs?: SendInputDto[];

  @IsOptional()
  @IsNumber()
  locktime?: number;

  @IsOptional()
  @IsBoolean()
  lock_unspents?: boolean;

  @IsOptional()
  @IsBoolean()
  psbt?: boolean;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  subtract_fee_from_outputs?: number[];

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
  @Type(() => SendSolvingDataDto)
  solving_data?: SendSolvingDataDto;
}

export class SendDto {
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => SendOutputDto)
  outputs: SendOutputDto[] = [];

  @IsOptional()
  @IsNumber()
  conf_target?: number;

  @IsOptional()
  @IsString()
  @IsIn(['unset', 'economical', 'conservative'])
  estimate_mode?: string;

  @IsOptional()
  @IsNumber()
  fee_rate?: number | string;

  @IsOptional()
  @ValidateNested()
  @Type(() => SendOptionsDto)
  options?: SendOptionsDto;

  @IsOptional()
  @IsNumber()
  version?: number;
}
