import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FinalizePsbtDto {
  @IsString()
  @IsNotEmpty()
  psbt: string = '';

  @IsOptional()
  @IsBoolean()
  extract?: boolean;
}
