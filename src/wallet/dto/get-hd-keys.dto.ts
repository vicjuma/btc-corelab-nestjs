import { IsBoolean, IsOptional } from 'class-validator';

export class GetHdKeysDto {
  @IsOptional()
  @IsBoolean()
  active_only?: boolean;

  @IsOptional()
  @IsBoolean()
  private?: boolean;
}
