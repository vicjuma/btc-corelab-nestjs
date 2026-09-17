import { IsNotEmpty, IsString } from 'class-validator';

export class GetMempoolEntryDto {
  @IsString()
  @IsNotEmpty()
  txid!: string;
}
