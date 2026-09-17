import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class CreatePsbtInputDto {
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

export class CreatePsbtOutputDto {
  [key: string]: number | string;
}

export class CreatePsbtDto {
  @IsArray()
  @IsNotEmpty()
  inputs!: CreatePsbtInputDto[];

  @IsArray()
  @IsNotEmpty()
  outputs!: CreatePsbtOutputDto[];

  @IsOptional()
  @IsNumber()
  locktime?: number;

  @IsOptional()
  @IsBoolean()
  replaceable?: boolean;

  @IsOptional()
  @IsNumber()
  version?: number;

  @IsOptional()
  @IsNumber()
  psbt_version?: number;
}
