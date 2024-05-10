import { Module } from '@nestjs/common';
import { IpqueryService } from './ipquery.service';
import { IpqueryController } from './ipquery.controller';

@Module({
  controllers: [IpqueryController],
  providers: [IpqueryService]
})
export class IpqueryModule {}
