import { Module } from '@nestjs/common';
import { ServiceModule } from './service/service.module';
import { ShadiaoController } from './shadiao.controller';

@Module({
  imports: [ServiceModule],
  controllers: [ShadiaoController],
})
export class ShadiaoModule {}
