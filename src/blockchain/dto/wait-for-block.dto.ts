import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class WaitForBlockDto {
  @IsString()
  @IsNotEmpty()
  blockhash!: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  timeout?: number;
}
