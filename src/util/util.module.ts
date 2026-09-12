import { Module } from '@nestjs/common';
import { UtilService } from './util.service';
import { UtilController } from './util.controller';
import { RpcService } from 'src/rpc/rpc.service';

@Module({
  controllers: [UtilController],
  providers: [UtilService, RpcService],
})
export class UtilModule {}
