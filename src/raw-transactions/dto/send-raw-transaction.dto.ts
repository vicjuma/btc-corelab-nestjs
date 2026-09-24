import { IsNumber, IsOptional, IsString } from 'class-validator';

export class SendRawTransactionDto {
  @IsString()
  hexstring!: string;

  @IsOptional()
  @IsNumber()
  maxfeerate?: number;

  @IsOptional()
  @IsNumber()
  maxburnamount?: number;
}
