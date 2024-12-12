/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('shenhe')
export class ShenHeController {
  @Get('name/:type')
  getShadiaoName(@Param() params: any): string {
    if (params.type === 'joke100') {
      return '1.14.2';
    }
    return 'shenhe';
  }
}
