import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class GetTxOutDto {
  @IsString()
  @IsNotEmpty()
  txid!: string;

  @IsInt()
  @IsNotEmpty()
  n!: number;

  @IsOptional()
  @IsBoolean()
  include_mempool?: boolean;
}
