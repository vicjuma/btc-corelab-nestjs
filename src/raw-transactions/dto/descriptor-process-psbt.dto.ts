import {
  IsArray,
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class DescriptorProcessPsbtDescriptorDto {
  @IsString()
  @IsNotEmpty()
  desc!: string;

  @IsOptional()
  range?: number | [number, number];
}

export class DescriptorProcessPsbtDto {
  @IsString()
  @IsNotEmpty()
  psbt!: string;

  @IsArray()
  @IsNotEmpty()
  descriptors!: (string | DescriptorProcessPsbtDescriptorDto)[];

  @IsOptional()
  @IsString()
  @IsIn([
    'DEFAULT',
    'ALL',
    'NONE',
    'SINGLE',
    'ALL|ANYONECANPAY',
    'NONE|ANYONECANPAY',
    'SINGLE|ANYONECANPAY',
  ])
  sighashtype?: string;

  @IsOptional()
  @IsBoolean()
  bip32derivs?: boolean;

  @IsOptional()
  @IsBoolean()
  finalize?: boolean;
}
