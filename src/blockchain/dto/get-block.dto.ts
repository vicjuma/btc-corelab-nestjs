import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetBlockDto {
  @IsString()
  @IsNotEmpty()
  blockhash!: string;

  @IsOptional()
  @IsInt()
  @IsIn([0, 1, 2, 3])
  verbosity?: number;
}
