import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ShadiaoService {
  constructor(private readonly httpService: HttpService) {}
}
