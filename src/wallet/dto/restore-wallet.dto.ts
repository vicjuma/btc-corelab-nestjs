import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RestoreWalletDto {
  @IsString()
  @IsNotEmpty()
  wallet_name: string = '';

  @IsString()
  @IsNotEmpty()
  backup_file: string = '';

  @IsOptional()
  @IsBoolean()
  load_on_startup?: boolean;
}
