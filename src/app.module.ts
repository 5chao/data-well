import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import modulesList from './modules';

@Module({
  imports: [...modulesList],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
