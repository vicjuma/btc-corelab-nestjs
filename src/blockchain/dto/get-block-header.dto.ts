import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetBlockHeaderDto {
  @IsString()
  @IsNotEmpty()
  blockhash!: string;

  @IsOptional()
  @IsBoolean()
  verbose?: boolean;
}
