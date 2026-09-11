import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class ListTransactionsDto {
  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @IsNumber()
  count?: number;

  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsBoolean()
  include_watchonly?: boolean;
}
