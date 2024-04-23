import { Controller, Get } from '@nestjs/common';
import { map } from 'rxjs';
import { ShadiaoService } from './shadiao.service';

@Controller('shadiao')
export class ShadiaoController {
  constructor(private readonly shadiaoService: ShadiaoService) {}

  @Get()
  getShadiao() {
    return this.shadiaoService.getShadiao().pipe(map((res) => res.data));
  }

  @Get('name')
  getShadiaoName(): String {
    return 'getShadiaoName';
  }
}
