import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { ApiproxyService } from './apiproxy.service';
import { ApiproxyController } from './apiproxy.controller';
import { ApiLog } from 'src/entites/apilog/apilog.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([ApiLog])],
  controllers: [ApiproxyController],
  providers: [ApiproxyService],
})
export class ApiproxyModule {}
