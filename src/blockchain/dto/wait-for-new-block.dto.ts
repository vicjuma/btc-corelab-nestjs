import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class WaitForNewBlockDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  timeout?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  current_tip?: string;
}
