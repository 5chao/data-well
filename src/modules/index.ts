/* eslint-disable prettier/prettier */
import { ShadiaoModule } from './shadiao/shadiao.module';
import { ApiproxyModule } from './apiproxy/apiproxy.module';
import { IpqueryModule } from './ipquery/ipquery.module';
import { SheHeModule } from './shenhe/shenhe.module';
import MySqlModule from './mysql';

export default [
  MySqlModule,
  ShadiaoModule,
  ApiproxyModule,
  IpqueryModule,
  SheHeModule,
];
