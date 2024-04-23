import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShadiaoModule } from './modules/shadiao/shadiao.module';

@Module({
  imports: [ShadiaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
