import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class ListReceivedByAddressDto {
  @IsNumber()
  @IsOptional()
  minconf?: number;

  @IsOptional()
  @IsBoolean()
  include_empty?: boolean;

  @IsOptional()
  @IsBoolean()
  include_watchonly?: boolean;

  @IsOptional()
  @IsString()
  address_filter?: string;

  @IsOptional()
  @IsBoolean()
  include_immature_coinbase?: boolean;
}
