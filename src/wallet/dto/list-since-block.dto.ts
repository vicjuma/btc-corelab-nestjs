import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class ListSinceBlockDto {
  @IsOptional()
  @IsString()
  blockhash?: string;

  @IsOptional()
  @IsInt()
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
