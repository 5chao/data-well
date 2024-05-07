import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiproxyService } from './apiproxy.service';
import { ApiproxyController } from './apiproxy.controller';

@Module({
  imports: [HttpModule],
  controllers: [ApiproxyController],
  providers: [ApiproxyService],
})
export class ApiproxyModule {}
