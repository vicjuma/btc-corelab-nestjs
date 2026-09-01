import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetTransactionDto {
  @IsString()
  @IsNotEmpty()
  txid: string = '';

  @IsOptional()
  @IsBoolean()
  include_watchonly?: boolean;

  @IsOptional()
  @IsBoolean()
  verbose?: boolean;
}
