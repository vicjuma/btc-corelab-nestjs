import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CombinePsbtDto {
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  txs: string[] = [];
}
