import { Controller, Get } from '@nestjs/common';
import { RealIp } from 'nestjs-real-ip';
import { IpqueryService } from './ipquery.service';

@Controller('ipquery')
export class IpqueryController {
  constructor(private readonly ipqueryService: IpqueryService) {}
  @Get()
  getIp(@RealIp() ip: string) {
    if (ip && ip !== '::1') {
      const ips = ip.replace('::', '').split(':');
      return ips[1] || ips[0];
    }

    return '';
  }
}
