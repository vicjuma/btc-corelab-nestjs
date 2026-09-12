import { Injectable } from '@nestjs/common';
import { RpcService } from 'src/rpc/rpc.service';

@Injectable()
export class UtilService {
  constructor(private readonly rpcService: RpcService) {}

  async getDescriptorInfo(descriptor: string) {
    return this.rpcService.rpc('getdescriptorinfo', `descriptor=${descriptor}`);
  }

  async deriveAddresses(descriptor: string, range?: string) {
    return this.rpcService.rpc(
      'deriveaddresses',
      `descriptor=${descriptor}`,
      `range=${range}`,
    );
  }

  async validateAddress(address: string) {
    return this.rpcService.rpc('validateaddress', `address=${address}`);
  }
}
