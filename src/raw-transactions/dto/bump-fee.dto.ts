import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

export class BumpFeeOptionsDto {
  @IsOptional()
  @IsInt()
  @Min(1)
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
  @IsObject({ each: true })
  outputs?: Record<string, number | string>[];

  @IsOptional()
  @IsInt()
  @Min(0)
  original_change_index?: number;
}

export class BumpFeeDto {
  @IsString()
  @IsNotEmpty()
  txid!: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => BumpFeeOptionsDto)
  options?: BumpFeeOptionsDto;
}
