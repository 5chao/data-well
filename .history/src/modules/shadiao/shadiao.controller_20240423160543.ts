import { Controller, Get } from '@nestjs/common';
import { ShadiaoService } from './shadiao.service';

@Controller('shadiao')
export class ShadiaoController {
  constructor(private readonly shadiaoService: ShadiaoService) {}

  @Get()
  async getShadiao(): Promise<any> {
    let data = await this.shadiaoService.getShadiao();
    console.log(data, '|===data==');
    return 'shadiao';
  }

  @Get('name')
  getShadiaoName(): String {
    return 'getShadiaoName';
  }
}
