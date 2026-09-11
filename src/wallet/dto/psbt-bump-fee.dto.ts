import {
  IsArray,
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

export class PsbtBumpFeeOutputDto {
  [key: string]: string | number;
}

export class PsbtBumpFeeOptionsDto {
  @IsOptional()
  @IsNumber()
  conf_target?: number;

  @IsOptional()
  @IsNumber()
  fee_rate?: number | string;

  @IsOptional()
  @IsBoolean()
  replaceable?: boolean;

  @IsOptional()
  @IsString()
  @IsIn(['unset', 'economical', 'conservative'])
  estimate_mode?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PsbtBumpFeeOutputDto)
  outputs?: PsbtBumpFeeOutputDto[];

  @IsOptional()
  @IsNumber()
  original_change_index?: number;

  @IsOptional()
  @IsNumber()
  psbt_version?: number;
}

export class PsbtBumpFeeDto {
  @IsString()
  txid: string = '';

  @IsOptional()
  @ValidateNested()
  @Type(() => PsbtBumpFeeOptionsDto)
  options?: PsbtBumpFeeOptionsDto;
}
