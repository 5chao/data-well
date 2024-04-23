import { Module } from '@nestjs/common';
import { ShadiaoController } from './shadiao.controller';

@Module({
  imports: [ServiceModule],
  controllers: [ShadiaoController],
})
export class ShadiaoModule {}
