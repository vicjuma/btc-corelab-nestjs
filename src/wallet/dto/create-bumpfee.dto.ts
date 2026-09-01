import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsIn,
  ValidatorConstraint,
  ValidationArguments,
  ValidatorConstraintInterface,
  ValidationOptions,
  registerDecorator,
  IsArray,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

export class BumpfeeOutputDto {
  [key: string]: string | number;
}

function isBitcoinAddressLike(address: string): boolean {
  return /^(bc1|tb1|bcrt1|[13mn2])[a-zA-HJ-NP-Z0-9]{20,}$/.test(address);
}

function IsValidBumpfeeOutput(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidBumpfeeOutputConstraint,
    });
  };
}

function IsValidBumpfeeOutputArray(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidBumpfeeOutputArrayConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'isValidBumpfeeOutput', async: false })
class IsValidBumpfeeOutputConstraint implements ValidatorConstraintInterface {
  validate(value: unknown, _args: ValidationArguments): boolean {
    console.log(`${JSON.stringify(_args)}`);
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
      return false;
    }

    const keys = Object.keys(value as Record<string, unknown>);

    // Exactly one key per object, per the docs ("Each key may only appear once")
    if (keys.length !== 1) return false;

    const key = keys[0];
    const val = (value as Record<string, unknown>)[key];

    if (key === 'data') {
      // must be a hex string
      return typeof val === 'string' && /^[0-9a-fA-F]*$/.test(val);
    }

    // otherwise treat key as an address, value must be numeric or numeric string
    const isNumericAmount =
      typeof val === 'number' ||
      (typeof val === 'string' && !isNaN(Number(val)));

    return isNumericAmount && isBitcoinAddressLike(key);
  }

  defaultMessage(_args: ValidationArguments): string {
    return `Each output must be a single { address: amount } or { data: hex } pair: ${JSON.stringify(_args)}`;
  }
}

@ValidatorConstraint({ name: 'isValidBumpfeeOutputArray', async: false })
class IsValidBumpfeeOutputArrayConstraint
  implements ValidatorConstraintInterface
{
  validate(outputs: unknown, _args: ValidationArguments): boolean {
    console.log(`${JSON.stringify(_args)}`);
    if (!Array.isArray(outputs) || outputs.length === 0) return false;

    const seenKeys = new Set<string>();
    let dataCount = 0;

    for (const output of outputs) {
      if (typeof output !== 'object' || output === null) return false;
      const key = Object.keys(output)[0];

      if (key === 'data') {
        dataCount++;
        if (dataCount > 1) return false;
      } else {
        if (seenKeys.has(key)) return false;
        seenKeys.add(key);
      }
    }

    return true;
  }

  defaultMessage(): string {
    return "Outputs must not contain duplicate addresses and may only include one 'data' entry";
  }
}

export class CreateBumpFeeDto {
  @IsString()
  @IsNotEmpty()
  txid: string = '';

  @IsOptional()
  @IsNumber()
  conf_target?: number;

  @IsOptional()
  @IsNumber()
  fee_rate?: number | string;

  @IsOptional()
  @IsBoolean()
  replaceable?: boolean;

  @IsOptional()
  @IsString()
  @IsIn(['unset', 'economical', 'conservative'])
  estimate_mode?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BumpfeeOutputDto)
  @IsValidBumpfeeOutput({ each: true } as any)
  @IsValidBumpfeeOutputArray()
  outputs?: BumpfeeOutputDto[];

  @IsOptional()
  original_change_index?: number;
}
