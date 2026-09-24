import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class GetMempoolDescendantsDto {
  @IsString()
  txid!: string;

  @IsOptional()
  @IsBoolean()
  verbose?: boolean;
}
