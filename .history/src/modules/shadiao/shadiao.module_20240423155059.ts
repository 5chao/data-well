import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ShadiaoController } from './shadiao.controller';
import { ShadiaoService } from './shadiao.service';

@Module({
  imports: [],
  controllers: [ShadiaoController],
  providers: [ShadiaoService],
})
export class ShadiaoModule {}
