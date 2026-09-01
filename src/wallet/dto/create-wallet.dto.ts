import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWalletDto {
  /**
   * The name for the new wallet.
   * If this is a path, the wallet will be created at the path location.
   */
  @IsString()
  @IsNotEmpty()
  wallet_name: string = '';

  /**
   * Disable the possibility of private keys.
   * Default: false
   */
  @IsOptional()
  @IsBoolean()
  disable_private_keys?: boolean = false;

  /**
   * Create a blank wallet.
   * A blank wallet has no keys.
   * Default: false
   */
  @IsOptional()
  @IsBoolean()
  blank?: boolean = false;

  /**
   * Encrypt the wallet with this passphrase.
   */
  @IsOptional()
  @IsString()
  passphrase?: string | undefined = undefined;

  /**
   * Keep track of coin reuse.
   * Default: false
   */
  @IsOptional()
  @IsBoolean()
  avoid_reuse?: boolean = false;

  /**
   * Use descriptor wallets.
   * Must be true when specified.
   * Default: true
   */
  @IsOptional()
  @IsBoolean()
  descriptors?: boolean = true;

  /**
   * Whether to load the wallet on startup.
   * true  -> add wallet to startup list
   * false -> remove wallet from startup list
   * null  -> leave unchanged
   */
  @IsOptional()
  @IsBoolean()
  load_on_startup?: boolean = false;

  /**
   * Use an external signer such as a hardware wallet.
   * Requires -signer to be configured.
   * Default: false
   */
  @IsOptional()
  @IsBoolean()
  external_signer?: boolean = false;
}
