import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class GetBalanceDto {
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  minconf?: number;

  @IsOptional()
  @IsBoolean()
  avoid_reuse?: boolean = true;
}
