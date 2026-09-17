import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRawTransactionInputDto {
  @IsString()
  @IsNotEmpty()
  txid!: string;

  @IsNumber()
  @IsNotEmpty()
  vout!: number;

  @IsOptional()
  @IsNumber()
  sequence?: number;
}

export class CreateRawTransactionOutputDto {
  [key: string]: string | number;
}

export class CreateRawTransactionDto {
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateRawTransactionInputDto)
  inputs!: CreateRawTransactionInputDto[];

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateRawTransactionOutputDto)
  outputs!: CreateRawTransactionOutputDto[];

  @IsOptional()
  @IsNumber()
  locktime?: number;

  @IsOptional()
  @IsBoolean()
  replaceable?: boolean;

  @IsOptional()
  @IsNumber()
  version?: number;
}
