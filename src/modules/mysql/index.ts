import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'src/entites';

const proConf: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'soapberry',
  password: 'Soap2024@',
  database: 'soapberry',
  entities: [...entities],
  synchronize: false,
};

const devConf: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'soapberry',
  entities: [...entities],
  synchronize: false,
};

export default TypeOrmModule.forRoot(devConf);
