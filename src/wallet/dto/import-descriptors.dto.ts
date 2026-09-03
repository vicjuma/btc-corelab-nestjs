import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  registerDecorator,
  ValidateNested,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions,
} from 'class-validator';

export class ImportDescriptorRequestDto {
  @IsString()
  @IsNotEmpty()
  desc: string = '';

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsImportDescriptorRange()
  range?: number | [number, number];

  @IsOptional()
  @IsNumber()
  @IsInt()
  next_index?: number;

  @IsImportDescriptorTimestamp()
  timestamp!: number | 'now';

  @IsOptional()
  @IsBoolean()
  internal?: boolean;

  @IsOptional()
  @IsString()
  label?: string;
}

export class ImportDescriptorsDto {
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ImportDescriptorRequestDto)
  requests!: ImportDescriptorRequestDto[];
}

function IsImportDescriptorRange(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsImportDescriptorRangeConstraint,
    });
  };
}

@ValidatorConstraint({
  name: 'isImportDescriptorRange',
  async: false,
})
class IsImportDescriptorRangeConstraint
  implements ValidatorConstraintInterface
{
  validate(value: unknown): boolean {
    if (typeof value === 'number') {
      return Number.isInteger(value) && value >= 0;
    }

    if (!Array.isArray(value) || value.length !== 2) {
      return false;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const [begin, end] = value;

    return (
      Number.isInteger(begin) &&
      Number.isInteger(end) &&
      begin >= 0 &&
      end >= begin
    );
  }

  defaultMessage(): string {
    return 'range must be a non-negative integer or [begin, end] where begin <= end';
  }
}

function IsImportDescriptorTimestamp(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsImportDescriptorTimestampConstraint,
    });
  };
}

@ValidatorConstraint({
  name: 'isImportDescriptorTimestamp',
  async: false,
})
class IsImportDescriptorTimestampConstraint
  implements ValidatorConstraintInterface
{
  validate(value: unknown): boolean {
    if (value === 'now') {
      return true;
    }

    return typeof value === 'number' && Number.isInteger(value) && value >= 0;
  }

  defaultMessage(): string {
    return 'timestamp must be a non-negative Unix timestamp or "now"';
  }
}
