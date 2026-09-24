import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class GetMempoolAncestorsDto {
  @IsString()
  txid!: string;

  @IsOptional()
  @IsBoolean()
  verbose?: boolean;
}
