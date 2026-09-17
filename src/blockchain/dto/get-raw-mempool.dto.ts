import { IsBoolean, IsOptional } from 'class-validator';

export class GetRawMempoolDto {
  @IsOptional()
  @IsBoolean()
  verbose?: boolean;

  @IsOptional()
  @IsBoolean()
  mempool_sequence?: boolean;
}
