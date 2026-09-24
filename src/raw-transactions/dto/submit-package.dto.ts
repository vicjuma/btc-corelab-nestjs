import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class SubmitPackageDto {
  @IsArray()
  @IsString({ each: true })
  package!: string[];

  @IsOptional()
  @IsNumber()
  maxfeerate?: number;

  @IsOptional()
  @IsNumber()
  maxburnamount?: number;
}
