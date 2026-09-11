import {
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class WalletProcessPsbtDto {
  @IsString()
  @IsNotEmpty()
  psbt: string = '';

  @IsOptional()
  @IsBoolean()
  sign?: boolean;

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

  @IsOptional()
  @IsBoolean()
  bip32derivs?: boolean;

  @IsOptional()
  @IsBoolean()
  finalize?: boolean;
}
