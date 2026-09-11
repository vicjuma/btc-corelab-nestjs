import {
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class SendToAddressDto {
  @IsString()
  @IsNotEmpty()
  address: string = '';

  @IsNotEmpty()
  amount: number | string = '';

  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @IsString()
  comment_to?: string;

  @IsOptional()
  @IsBoolean()
  subtractfeefromamount?: boolean;

  @IsOptional()
  @IsBoolean()
  replaceable?: boolean;

  @IsOptional()
  @IsNumber()
  conf_target?: number;

  @IsOptional()
  @IsString()
  @IsIn(['unset', 'economical', 'conservative'])
  estimate_mode?: string;

  @IsOptional()
  @IsBoolean()
  avoid_reuse?: boolean;

  @IsOptional()
  fee_rate?: number | string;

  @IsOptional()
  @IsBoolean()
  verbose?: boolean;
}
