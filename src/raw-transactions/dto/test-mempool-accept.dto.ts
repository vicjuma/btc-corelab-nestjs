import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class TestMempoolAcceptDto {
  @IsArray()
  @IsString({ each: true })
  rawtxs!: string[];

  @IsOptional()
  @IsNumber()
  @IsString()
  maxfeerate?: number | string;
}
