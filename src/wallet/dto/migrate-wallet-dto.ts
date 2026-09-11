import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class MigrateWalletDto {
  @IsOptional()
  @IsString()
  wallet_name?: string;

  @IsOptional()
  @IsString()
  passphrase?: string;

  @IsOptional()
  @IsBoolean()
  load_wallet?: boolean;
}
