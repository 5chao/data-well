import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'src/entites';

export default TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'http://47.101.136.34',
  port: 3306,
  username: 'soapberry',
  password: 'Soap2024@',
  database: 'soap',
  entities: [...entities],
  synchronize: false,
});
