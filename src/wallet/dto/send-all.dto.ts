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

export class SendAllRecipientDto {
  [key: string]: string | number;
}

export class SendAllInputDto {
  @IsString()
  @IsNotEmpty()
  txid: string = '';

  @IsNumber()
  vout: number = 0;

  @IsOptional()
  @IsNumber()
  sequence?: number;
}

export class SendAllSolvingDataDto {
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

export class SendAllOptionsDto {
  @IsOptional()
  @IsBoolean()
  add_to_wallet?: boolean;

  @IsOptional()
  @IsNumber()
  fee_rate?: number | string;

  @IsOptional()
  @IsBoolean()
  include_watching?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SendAllInputDto)
  inputs?: SendAllInputDto[];

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
  @IsBoolean()
  send_max?: boolean;

  @IsOptional()
  @IsNumber()
  minconf?: number;

  @IsOptional()
  @IsNumber()
  maxconf?: number;

  @IsOptional()
  @IsNumber()
  version?: number;

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
  @Type(() => SendAllSolvingDataDto)
  solving_data?: SendAllSolvingDataDto;
}

export class SendAllDto {
  @IsArray()
  @IsNotEmpty()
  recipients: (string | SendAllRecipientDto)[] | undefined;

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
  @Type(() => SendAllOptionsDto)
  options?: SendAllOptionsDto;
}
