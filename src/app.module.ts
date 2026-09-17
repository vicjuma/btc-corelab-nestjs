import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { WalletModule } from './wallet/wallet.module';
import { RpcService } from './rpc/rpc.service';
import { BlockchainModule } from './blockchain/blockchain.module';
import { UtilModule } from './util/util.module';
import { RawTransactionsModule } from './raw-transactions/raw-transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    WalletModule,
    BlockchainModule,
    UtilModule,
    RawTransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, Logger, RpcService],
})
export class AppModule {}
