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

export class SignRawTransactionWithWalletPrevTxDto {
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

export class SignRawTransactionWithWalletDto {
  @IsString()
  @IsNotEmpty()
  hexstring: string = '';

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SignRawTransactionWithWalletPrevTxDto)
  prevtxs?: SignRawTransactionWithWalletPrevTxDto[];

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
