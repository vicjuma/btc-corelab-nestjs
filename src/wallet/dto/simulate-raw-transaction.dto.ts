import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SimulateRawTransactionOptionsDto {
  @IsOptional()
  @IsBoolean()
  include_watchonly?: boolean;
}

export class SimulateRawTransactionDto {
  @IsArray()
  @IsString({ each: true })
  rawtxs!: string[];

  @IsOptional()
  @ValidateNested()
  @Type(() => SimulateRawTransactionOptionsDto)
  options?: SimulateRawTransactionOptionsDto;
}
