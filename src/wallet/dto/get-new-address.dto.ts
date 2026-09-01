import { IsIn, IsOptional, IsString } from 'class-validator';

export class GetNewAddressDto {
  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @IsString()
  @IsIn(['legacy', 'p2sh-segwit', 'bech32', 'bech32m'])
  address_type?: string;
}
