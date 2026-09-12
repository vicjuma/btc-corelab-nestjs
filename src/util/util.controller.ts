import { Body, Controller, Get, Post } from '@nestjs/common';
import { UtilService } from './util.service';

@Controller('util')
export class UtilController {
  constructor(private readonly utilService: UtilService) {}

  @Get('getdescriptorinfo')
  getDescriptorInfo(descriptor: string) {
    return this.utilService.getDescriptorInfo(descriptor);
  }

  @Post('deriveaddresses')
  deriveAddresses(
    @Body('descriptor') descriptor: string,
    @Body('range') range?: string,
  ) {
    return this.utilService.deriveAddresses(descriptor, range);
  }

  @Post('validateaddress')
  validateAddress(@Body('address') address: string) {
    return this.utilService.validateAddress(address);
  }
}
