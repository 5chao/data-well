import { Controller, Get } from '@nestjs/common';

@Controller('shadiao')
export class ShadiaoController {
  @Get()
  getShadiao(): String {
    return 'shadiao';
  }

  @Get()
  getShadiaoName('name'): String {
    return 'getShadiaoName';
  }
}
