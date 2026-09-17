import { Injectable } from '@nestjs/common';
import { RpcService } from 'src/rpc/rpc.service';
import { EstimateSmartFeeDto } from './dto/estimate-smart-fee.dto';

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

  async estimateSmartFee(estimateSmartFeeDto: EstimateSmartFeeDto) {
    const { conf_target, estimate_mode, options } = estimateSmartFeeDto;

    const hasOptions = options !== undefined;

    const args = [
      String(conf_target),
      ...(estimate_mode !== undefined || hasOptions
        ? [estimate_mode ?? 'economical']
        : []),
      ...(hasOptions ? [JSON.stringify(options)] : []),
    ];

    return this.rpcService.rpc('estimatesmartfee', ...args);
  }
}
