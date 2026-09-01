import {
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateWalletDescriptorDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['legacy', 'p2sh-segwit', 'bech32', 'bech32m'])
  type: string = '';

  @IsOptional()
  @IsBoolean()
  internal?: boolean;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  hdkey?: string;
}
