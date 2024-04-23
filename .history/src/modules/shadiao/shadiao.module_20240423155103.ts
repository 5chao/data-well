import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ShadiaoController } from './shadiao.controller';
import { ShadiaoService } from './shadiao.service';

@Module({
  imports: [HttpModule],
  controllers: [ShadiaoController],
  providers: [ShadiaoService],
})
export class ShadiaoModule {}
