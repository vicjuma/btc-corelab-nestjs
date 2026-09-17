import { IsNotEmpty, IsString } from 'class-validator';

export class AnalyzePsbtDto {
  @IsString()
  @IsNotEmpty()
  psbt!: string;
}
