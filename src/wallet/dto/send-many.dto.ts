import {
  IsArray,
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class SendManyAmountsDto {
  [key: string]: string | number;
}

export class SendManyDto {
  @IsOptional()
  @IsString()
  dummy?: string;

  @IsNotEmpty()
  amounts: SendManyAmountsDto = {};

  @IsOptional()
  @IsNumber()
  minconf?: number;

  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  subtractfeefrom?: string[];

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
  @IsNumber()
  fee_rate?: number | string;

  @IsOptional()
  @IsBoolean()
  verbose?: boolean;
}
