import { IsInt, IsOptional, Min } from 'class-validator';

export class WaitForBlockHeightDto {
  @IsInt()
  @Min(0)
  height!: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  timeout?: number;
}
