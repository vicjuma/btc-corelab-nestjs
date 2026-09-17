import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GetTxSpendingPrevoutOutputDto {
  @IsString()
  @IsNotEmpty()
  txid!: string;

  @IsInt()
  @IsNotEmpty()
  vout!: number;
}

export class GetTxSpendingPrevoutOptionsDto {
  @IsOptional()
  @IsBoolean()
  mempool_only?: boolean;

  @IsOptional()
  @IsBoolean()
  return_spending_tx?: boolean;
}

export class GetTxSpendingPrevoutDto {
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => GetTxSpendingPrevoutOutputDto)
  outputs!: GetTxSpendingPrevoutOutputDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => GetTxSpendingPrevoutOptionsDto)
  options?: GetTxSpendingPrevoutOptionsDto;
}
