import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { map } from 'rxjs';
import { RealIp } from 'nestjs-real-ip';
import { ApiproxyService } from './apiproxy.service';

@Controller('apiproxy')
export class ApiproxyController {
  constructor(private readonly apiproxyService: ApiproxyService) {}

  @Post('')
  requestProxyApi(@Req() request: Request, @RealIp() ip: string) {
    const { api, method, data, test } = request.body;

    if (method == 'post') {
      // post请求
      return this.apiproxyService
        .postProxyApi(api, data)
        .pipe(map((res) => res.data));
    }

    const url = api + this.apiproxyService.parseUrlParams(data);
    if (!test) {
      this.apiproxyService.addApiLog(api, ip);
    }
    return this.apiproxyService.getProxyApi(url).pipe(map((res) => res.data));
  }

  @Get('get')
  getProxyApi(@Req() request: Request) {
    const { query } = request;

    return this.apiproxyService
      .getProxyApi(query.api)
      .pipe(map((res) => res.data));
  }

  @Post('post')
  postProxyApi(@Req() request: Request) {
    const { query } = request;
    const { api, data } = query;

    return this.apiproxyService
      .postProxyApi(api, data)
      .pipe(map((res) => res.data));
  }
}
