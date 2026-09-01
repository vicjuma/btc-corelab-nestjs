import { IsIn, IsOptional, IsString } from 'class-validator';

export class GetRawChangeAddressDto {
  @IsOptional()
  @IsString()
  @IsIn(['legacy', 'p2sh-segwit', 'bech32', 'bech32m'])
  address_type?: string;
}
