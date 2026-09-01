import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetReceivedByLabelDto {
  @IsString()
  label: string = '';

  @IsOptional()
  @IsNumber()
  minconf?: number;

  @IsOptional()
  @IsBoolean()
  include_immature_coinbase?: boolean;
}
