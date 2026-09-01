import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class GetReceivedByAddressDto {
  @IsString()
  @IsNotEmpty()
  address: string = '';

  @IsOptional()
  @IsNumber()
  minconf?: number;

  @IsOptional()
  @IsBoolean()
  include_immature_coinbase?: boolean;
}
