import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class JoinPsbtsDto {
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  txs: string[] = [];
}
