import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ShenHeController } from './shehe.controller';
import { ShenHeService } from './shenhe.service';

@Module({
  imports: [HttpModule],
  controllers: [ShenHeController],
  providers: [ShenHeService],
})
export class SheHeModule {}
