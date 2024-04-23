import { Controller, Get } from '@nestjs/common';
import { ShadiaoService } from './shadiao.service';

@Controller('shadiao')
export class ShadiaoController {
  constructor(private readonly shadiaoService: ShadiaoService) {}

  @Get()
  getShadiao(): Promise<String> {
    return this.shadiaoService.getShadiao();
  }

  @Get('name')
  getShadiaoName(): String {
    return 'getShadiaoName';
  }
}
