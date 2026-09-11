import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

export class ListUnspentQueryOptionsDto {
  @IsOptional()
  @IsNumber()
  minimumAmount?: number | string;

  @IsOptional()
  @IsNumber()
  maximumAmount?: number | string;

  @IsOptional()
  @IsNumber()
  maximumCount?: number;

  @IsOptional()
  @IsNumber()
  minimumSumAmount?: number | string;

  @IsOptional()
  @IsBoolean()
  include_immature_coinbase?: boolean;
}

export class ListUnspentDto {
  @IsOptional()
  @IsNumber()
  minconf?: number;

  @IsOptional()
  @IsNumber()
  maxconf?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  addresses?: string[];

  @IsOptional()
  @IsBoolean()
  include_unsafe?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => ListUnspentQueryOptionsDto)
  query_options?: ListUnspentQueryOptionsDto;
}
