import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiLog } from 'src/entites/apilog/apilog.entity';
import moment from 'moment';

@Injectable()
export class ApiproxyService {
  constructor(
    @InjectRepository(ApiLog) private apiLogRepository: Repository<ApiLog>,
    private readonly httpService: HttpService,
  ) {}

  postProxyApi(url, params): Observable<AxiosResponse<any>> {
    return this.httpService.post(url, params);
  }

  getProxyApi(url): Observable<AxiosResponse<any>> {
    return this.httpService.get(url);
  }

  parseUrlParams(data): String {
    let _params = [];

    for (const key in data) {
      _params.push(`${key}=${data[key]}`);
    }

    if (_params.length) {
      return '?' + _params.join('&');
    }

    return '';
  }

  addApiLog(name: string, ip: string) {
    const date = moment().format('YYYY-MM-DD HH:mm:ss');
    const newApiLog = this.apiLogRepository.create({
      name: name || 'unknown',
      ip,
      created_time: date,
      update_time: date,
    });
    return this.apiLogRepository.save(newApiLog);
  }
}
