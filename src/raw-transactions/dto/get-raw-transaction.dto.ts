import {
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class GetRawTransactionDto {
  @IsString()
  @IsNotEmpty()
  txid!: string;

  @IsOptional()
  @IsNumber()
  @IsIn([0, 1, 2])
  verbosity?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  blockhash?: string;
}
