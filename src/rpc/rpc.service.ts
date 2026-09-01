import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

@Injectable()
export class RpcService {
  private readonly network = '-regtest';

  private readonly workingDir =
    '/home/ratedg/projects/contributions/bitcoin/build/bin';

  async rpc(...args: string[]): Promise<string> {
    try {
      const { stdout } = await execFileAsync(
        './bitcoin-cli',
        [this.network, '-named', ...args],
        {
          encoding: 'utf8',
          timeout: 10_000,
          cwd: this.workingDir,
        },
      );

      return stdout.trim();
    } catch (err) {
      throw new InternalServerErrorException(
        `bitcoin-cli failed: ${
          err instanceof Error ? err.message : String(err)
        }`,
      );
    }
  }
}
