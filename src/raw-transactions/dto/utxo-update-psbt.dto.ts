import { IsArray, IsOptional, IsString } from 'class-validator';

export class UtxoUpdatePsbtDescriptorDto {
  @IsString()
  desc!: string;

  @IsOptional()
  range?: number | [number, number];
}

export class UtxoUpdatePsbtDto {
  @IsString()
  psbt!: string;

  @IsOptional()
  @IsArray()
  descriptors?: (string | UtxoUpdatePsbtDescriptorDto)[];
}
