import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'src/entites';

export default TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'soapberry',
  password: 'Soap2024@',
  database: 'soapberry',
  entities: [...entities],
  synchronize: false,
});
