import {
  IsInt,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class EstimateSmartFeeOptionsDto {
  @IsOptional()
  @IsString()
  @IsIn(['none', 'block_policy', 'mempool_policy'])
  fee_rate_estimator?: string;

  @IsOptional()
  @IsNumber()
  verbosity?: number;
}

export class EstimateSmartFeeDto {
  @IsInt()
  @IsNotEmpty()
  conf_target!: number;

  @IsOptional()
  @IsString()
  @IsIn(['unset', 'economical', 'conservative'])
  estimate_mode?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => EstimateSmartFeeOptionsDto)
  options?: EstimateSmartFeeOptionsDto;
}
