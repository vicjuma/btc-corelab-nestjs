import { Type } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class SignRawTransactionWithKeyPrevTxDto {
  @IsString()
  @IsNotEmpty()
  txid: string = '';

  @IsNumber()
  vout: number = 0;

  @IsString()
  @IsNotEmpty()
  scriptPubKey: string = '';

  @IsOptional()
  @IsString()
  redeemScript?: string;

  @IsOptional()
  @IsString()
  witnessScript?: string;

  @IsOptional()
  amount?: number | string;
}

export class SignRawTransactionWithKeyDto {
  @IsString()
  @IsNotEmpty()
  hexstring: string = '';

  @IsArray()
  @IsString({ each: true })
  privkeys: string[] = [];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SignRawTransactionWithKeyPrevTxDto)
  prevtxs?: SignRawTransactionWithKeyPrevTxDto[];

  @IsOptional()
  @IsString()
  @IsIn([
    'DEFAULT',
    'ALL',
    'NONE',
    'SINGLE',
    'ALL|ANYONECANPAY',
    'NONE|ANYONECANPAY',
    'SINGLE|ANYONECANPAY',
  ])
  sighashtype?: string;
}
