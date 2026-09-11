import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class ListSinceBlockDto {
  @IsOptional()
  @IsString()
  blockhash?: string;

  @IsOptional()
  @IsNumber()
  target_confirmations?: number;

  @IsOptional()
  @IsBoolean()
  include_watchonly?: boolean;

  @IsOptional()
  @IsBoolean()
  include_removed?: boolean;

  @IsOptional()
  @IsBoolean()
  include_change?: boolean;

  @IsOptional()
  @IsString()
  label?: string;
}
