import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class SimulateRawTransactionOptionsDto {
  @IsOptional()
  @IsBoolean()
  include_watchonly?: boolean;
}

export class SimulateRawTransactionDto {
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  rawtxs?: string[];

  @IsOptional()
  @ValidateNested()
  @Type(() => SimulateRawTransactionOptionsDto)
  options?: SimulateRawTransactionOptionsDto;
}
