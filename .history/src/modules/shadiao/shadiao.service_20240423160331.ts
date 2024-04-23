import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ShadiaoService {
  constructor(private readonly httpService: HttpService) {}

  getShadiao() {
    return this.httpService.axiosRef.get(
      'https://api.pearktrue.cn/api/shadiao/',
    );
  }
}
