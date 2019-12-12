import { TypeOrmModuleOptions } from '@nestjs/typeorm'
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nest-taskmanagement',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
}