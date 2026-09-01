import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class DeriveHdKeyDto {
  @IsString()
  @IsNotEmpty()
  path: string = '';

  @IsOptional()
  @IsBoolean()
  private?: boolean;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  hdkey?: string;
}
