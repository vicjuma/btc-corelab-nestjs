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

export class LockUnspentTransactionDto {
  @IsString()
  @IsNotEmpty()
  txid: string = '';

  @IsInt()
  vout: number = 0;
}

export class LockUnspentDto {
  @IsBoolean()
  unlock: boolean = false;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LockUnspentTransactionDto)
  transactions?: LockUnspentTransactionDto[];

  @IsOptional()
  @IsBoolean()
  persistent?: boolean;
}
